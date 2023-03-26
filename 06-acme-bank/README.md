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

[Text]

### Securing your headers

[List]

### Sanitize and validate inputs on the public forum

[List]

## Protect against SQL Injections

[Text]

### Address vulnerability on the public forum page

[List]

### Address vulnerability on the public ledger page

[List]

## Path traversal protection

[Text]

## Bonus: Adding a linter

[Text]

## Review

[Text]
