# SQL Injection

> In this article, you’ll learn various SQL Injection techniques and strategies to mitigate these attacks.

When you log in to a webapp, you provide a username and password which are used to authenticate you. But how does this work under the hood? When you provide these credentials, the server will take your input and compare it against user data inside a database.

That step of checking the input against the database can be abused by attackers. Through a cleverly and carefully crafted input an attacker can inject code directly into the database query, getting precious data!

In this article, we’ll be talking about SQL Injection, which is this type of attack on a SQL database. You will be introduced to:

- How SQL is used to power applications
- Different types of SQL Injection attacks
- Basic ways to mitigate SQL Injection attacks

## SQL and SQL Databases

For web applications, SQL is the most common solution for storing and interacting with data. SQL is short for Structured Query Language, which helps communicate and manage a relational database.

What does a relational database look like? It is a collection of tables each with rows and columns. Take a look at the image below:

'TODO: Use table format'
orders 	items

order_number	int	PK
item_id	int	FK
cost	float

item_id	int	PK
price	int
description	longtext

In this database, we have two separate tables - the orders and items tables. In the orders table, we have three separate rows - the order_number, item_id, and cost. In this diagram, there is a relationship between the item_id field in the orders table to the item_id field in the items table. The item_id field is the primary key (PK) in the items table. A primary key is used to relate one table to another table.

This is how most websites organize their data, and SQL is the key to retrieving and updating data.

## How does SQL work?

On a web application, the frontend component displays content in a meaningful way to the users, and the backend controls the internal logic. The backend takes user inputs from the frontend and constructs SQL queries to get or modify data.

Let’s look at several SQL keywords:

- An `SELECT` statement to select the list of all customers from the orders table

```sql
SELECT customer FROM orders;
```

- An `INSERT` statement can add an entry to the items table

```sql
INSERT INTO items (item_id, price, description)
VALUES (101, 53.25, "A new pair of shoes.");
```

- An `UPDATE` statement updates a price in the items table

```sql
UPDATE items
SET price = 65.93
WHERE item_id = 101;
```

## What are SQL Injections?
A SQL injection is a common vulnerability affecting applications that use SQL as their database language. A hacker can use their knowledge of the SQL language to cleverly construct text inputs that modify the backend SQL query to their liking. They can force the application to output private data or respond in ways that provide intel.

![xkcd comic "Exploits of a Mom"](https://imgs.xkcd.com/comics/exploits_of_a_mom.png)

Using the following injection techniques, threat actors may be able to access information they shouldn’t have, change database records, or even take complete control of the system!

### Union-Based Injections

A union-based injection leverages the power of the SQL keyword `UNION`. `UNION` allows us to take two separate `SELECT` queries and combine their results. Union-based injections can allow an attacker to quickly steal information from a system.

Let’s look at an example.

Say this is how the query is created when a customer searched for a product name (`USER_INPUT`):

```sql
query = "SELECT product_name, product_cost, product_description FROM product_table WHERE product_name = " + USER_INPUT + "';";
```

If the attacker enters a user input such as this:

```sql
soap' UNION SELECT username,password,NULL FROM user_table;-- -
```

This input would create a valid SQL statement that grabs information for “soap” but UNIONS all the usernames and passwords of the users!

```sql
SELECT product_name, product_cost, product_description FROM
product_table WHERE product_name = 'soap' UNION SELECT username,password,NULL FROM user_table;-- -';
```

Notice the strategic placement of the `'` character that allows the attacker to insert SQL syntax and extend the SQL query!

### Error-Based Injections

In an error-based injection, an attacker writes a SQL query to force the application to return an error message with sensitive data.

Let’s take a look at the example below from an actual vulnerability. In this example, the attacker’s input causes an error that spits out the password.

```sql
asdf' UNION select 1, exp(~(select*from(SELECT Password FROM profiles WHERE ID=1)x)); -- -
```

SQL query:

```sql
SELECT user_id FROM users WHERE username='asdf' UNION select 1, exp(~(select*from(SELECT Password FROM profiles WHERE ID=1)x)); -- -
```

SQL completes that inside statement getting the password for the profile ID 1, but errors on the value type that should be returned. This is the error that accidentally gives away the password!

```sql
Database access error. Description: DOUBLE value is out of range in 'exp(~((select 'SUP3r_S3cur3_P@a55w0rd!' from dual)))'<?xml version='1.0' encoding='UTF-8'?><ray><result value="Error saving setting." status="failed" /></ray>
```

### Boolean-Based Injections

Boolean-based injections involve SQL statements that can confirm TRUE/FALSE questions about the database. When using this method, the attacker takes note of the difference in the web response (changes in HTML, HTTP response code, or other web session data) when the result of their question is true or false.

Suppose a website has a search box that will return the username and email of a specific user ID. The SQL query below is used:

```sql
SELECT username, email FROM users WHERE id = '[USER INPUT]';
```

In a normal search for `id 1`, the website will give back the username admin and email `admin@site.com` and display everything as normal.

Someone sneaky can use the `AND` keyword to see what happens on the website when the SQL statement is false.

For example, if the search input was this,

```sql
1' AND '1' = '2
```

and this was the SQL query that was run,

```sql
SELECT username, email FROM users WHERE id = '1' AND '1' = '2';
```

We won’t be getting a username and email back, since `1` is never equal to `2`. At this point, the attacker makes note of what happens on the website when the statement is false.

The attacker would also make note of what happens when the modified SQL statement is true (`1` is always equal to `1`).

```sql
SELECT username, email FROM users WHERE id = '1' AND '1' = '1';
```


Using this technique with the `AND` keyword, the attacker could write in any boolean statement on the other side of the `AND`, and based on the website’s response figure out if the statement is true.

Boolean injections are often used to figure out the name of a database table (possibly to build up for a Union-based injection), manipulating one query at a time to confirm one character at a time.

### Time-Based Injections

Not all SQL injections will provide visible output. A time-based injection makes use of several built in SQL functions, such as `SLEEP()` and `BENCHMARK()`, to cause visible delays in an application’s response time. While the output of a command isn’t visible, delays in the response time can be used to infer some information!

Suppose we have a database query that will check to see if a certain username `USER` exists within the database.

```sql
SELECT id FROM users WHERE username = 'USER';
```

Someone could write this SQL syntax as the text input to confirm if the admin‘s password is `P@ssw0rd123`

```sql
a' OR IF((SELECT password FROM users WHERE username='admin')='P@ssw0rd123', SLEEP(5), NULL);-- -
```

making the SQL query:

```sql
SELECT id FROM users WHERE username = 'a' OR IF((SELECT password FROM users WHERE username='admin')='P@ssw0rd123', SLEEP(5), NULL);-- -';
```

If there’s a 5-second delay before a response from the server, an attacker could confirm the `admin` user had a password of `P@ssw0rd123`.

### Out-of-Band SQL Injections

Out-of-Band injections are generally the rarest and most difficult injections to execute for attackers. Unlike the other methods, which return the results via the web application, an out-of-band injection will leverage a new channel to retrieve information from a query.

Generally, these SQL injections will cause the database server to send HTTP or DNS requests containing SQL query results to an attacker-controlled server. From there, the attacker could review the log files to identify the query results.

Again, these injections are extremely difficult to execute. They rely on permissions to database functions that are most often disabled, and would have to bypass firewalls that might stop requests to the attacker’s server.

## SQL Injection Prevention

There are two main methods for preventing injection attacks: sanitization and prepared statements.

### Sanitization

Sanitization is the process of removing dangerous characters from user input. When it comes to SQL injections, we would want to escape dangerous characters such as:

- `'`
- `;`
- `\--`

These sorts of characters can allow attackers to extend queries to output more data from a database.

While this does provide a layer of protection, this method isn’t perfect. If a user finds a way to bypass your sanitization process, they can easily inject data into your system.

Additionally, depending on your query, removing certain characters may have no effect! Therefore, this shouldn’t be your only defense mechanism.

### Prepared Statements

Writing prepared statements (also known as parameterized queries) in backend code is a common, reliable, and secure solution against SQL injections. Prepared statements are nearly foolproof.

How does it work? We provide the database the query we want to execute in advance.

1. First, a SQL query template is sent to the database. Certain values, called parameters, are left unspecified. For example, user input.
2. The database processes the query and performs optimizations.
3. Values are bound to the parameters and the SQL query is executed.
4. Then we pass in the parameters/user input. Any input, regardless of whether the content has SQL syntax, is then treated only as a parameter and will not be treated as SQL code.

Here is an example of what a prepared statement looks like in PHP web application backend code:

```js
$username= $_GET['user'];
$stmt = $conn->prepare("SELECT * FROM Users WHERE name = '?'");
$stmt->bind_param("s", $username);
$stmt->execute();
```

In addition to providing added security, prepared statements also make queries far more efficient.

## Conclusion

Since databases are a crucial part of many applications, SQL injection flaws continue to persist. Whether you’re developing an application or doing penetration testing to improve security, it’s crucial to understand the different forms of these SQL exploits!
