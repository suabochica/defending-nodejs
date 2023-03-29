# Securing Acme Bank: Defending Node Applications

> In this project, you’ll protect a banking application from SQL Injection and Cross-Site Scripting (XSS) attacks, as well as insecure JavaScript.

## Acme Bank

Welcome to Acme Bank! Acme Bank is a small credit union that provides assistance with deposits, loans, and a wide array of other financial services.

While the skeleton of their web app has been completed, there are certain vulnerabilities that were overlooked.

In this off-platform project, you will secure the application by:

- Protecting it against Cross-Site Scripting (XSS) Attacks by using helmet, securing cookies, validating and normalizing data with express-validator, and implementing alternative methods to prevent DOM-Based XSS attacks.
- Preventing SQL injection attacks by using prepared statements as well as validating input.
- Preventing Cross-Site Request Forgery (CSRF) attacks by implementing csurf middleware and updating certain view pages to secure any cross-site request vulnerabilities.

### Desktop requirements

- Have Node downloaded on your local machine
- Have a code editor of your choice installed
- Have an empty browser window ready to go
- Have a terminal window open
- Have a DB browser like DBBrowser installed to view the .db file

### Explore starter code and app

[Text]
1. Download the project, unzip the file, and open the folder in a code editor. All of the application code is in app.js. The views folder contains the .ejs files for the different pages.

2. Making sure your terminal window is open to your project folder, type the following command:

```
node app
```

3. In your browser window navigate to http://localhost:3000/ in order to see the log in page:

![Image text]("description editor")

An image showing a code editor with the starter code on the left side of the screen and a browser window with the login page on the right side of the screen.

4. Next, open the .db file with a SQL browser to see the different tables containing user information and credit union records. A common application is DBBrowser:

![Image text]("description editor")
An image showing a DBBrowswer window. It shows the database has four tables: public_forum, public_ledger, sqlite_sequence, and users. It also shows that the user table contains five users: admin, user1, user2, user3, and 123.

The database provided already has a number of users. Let’s log in to the application with one set of credentials:

```
username: admin
password: C0deC@demy_Rocks!
```

5. Once logged in, you should be redirected to a home page with a few navigation links listed. Make a note of which pages match up to which .ejs files.

## Protect against XSS attacks

The application is currently vulnerable to several different kinds of XSS attacks, particularly in the forum where users can upload code via the comment box. Let’s add layers of security to prevent any attacks.

### Securing your headers

1. Require the helmet package and implement the middleware.
> NOTE: The package is already included in the application.

2. Secure the application’s cookies by adding the appropriate properties/values.

### Sanitize and validate inputs on the public forum

Next, we’ll make use of `express-validator` in order to sanitize and validate any input data. This prevents an attacker from manipulating data before it reaches our database/backend server.

1. Require the `express-validator` package.

Protect the POST request for `"/public_forum"` by validating the `req.body.comment`. When choosing an `express-validator` method to validate comment input, make sure to consider which restrictions are reasonable. Users need to have some freedom in what they can type into the input field, but shouldn’t be able to attack our system.

Your code should look as follows:

```
var comment = // your validation code;
```

> NOTE: We’ll be making use of this variable in the next following tasks related to SQL injection.

Awesome, this page is looking a lot safer already!

## Protect against SQL Injections

1. Update the `POST` request for `"/auth"`, which is currently vulnerable to SQL injections.

2. Update the SQL query to use prepared statements instead of string interpolation for the `username` and `password`. SQL can use variables in order to prevent any direct manipulation of the database.

### Address vulnerability on the public forum page

![Image text]("description editor")

1. Protect the POST request for "/public_forum" by using SQL parameters for the request queries comment and username.
### Address vulnerability on the public ledger page

![Image text]("description editor")

Here, users can take advantage of this search query feature to inject SQL queries.

1. Protect the GET request for "/public_ledger" by using SQL parameters for the request queries, id and amount.

2. Make sure to parse the value from the request as an integer to make sure the data is standardized.

Now, every SQL query is a little safer from malicious user input!

## Path traversal protection

The `POST` request for the `"/download"` endpoint allows you to download personal records. The user input combined with the use of `fs` in the code means there’s a file path traversal vulnerability!

```js
if (request.session.loggedin) {
    file_name = request.session.file_history;
    response.render("download", { file_name });
} ...
```

1. Use the built-in package, `path`, in order to set the path starting from the current working directory followed by the string `"/history_files/"`, and then the variable `file_name`. Store this value in a variable called `root_directory`.

Your code should look as follows:

```js
const root_directory = // your code to set the path;
```

2. Create a variable called rootDir and assign it to `"history_files\\"`. Normalize the `filePath` variable and store the value in a variable called `fileName`.

3. Within the `try/catch` block, check if the `filename` variable contains the value of `rootDir`. If it doesn’t, set the response to `response.end("File not found");`. Otherwise, return the content.

## Bonus: Adding a linter

You can install a linter package in order to have a consistent format across all your JavaScript files. One popular package is eslint.

1. Install `eslint` with `npm` by using this terminal command:

```
npm install eslint --save-dev
```

2. From here you can configure an eslint file with the following command:

```
npx eslint --init
```

This will create an `.eslintrc` file for you where you can set all the rules for your syntax and formatting rules.

## Review

Congratulations on securing Acme Bank!

If you’ve had trouble, this is the project walkthrough video:

- https://youtu.be/d0pWvLyngHM

As you can see, there are various ways that an attacker can penetrate a site and retrieve important data. It’s always important to take different measures when securing an application since there’s no silver bullet. We secured HTTP headers, validated and sanitized user inputs, used prepared SQL statements, static code analysis tools, and implemented various middleware to prevent common web attacks! Apply these techniques in your future web development practice!
