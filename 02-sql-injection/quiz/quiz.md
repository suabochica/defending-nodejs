# Quiz

While testing a web application you try out SQL injection into input boxes. You find you’re unable to get visible output, but you notice that you can cause the database to delay its response. Which type of SQL injection would you use to gather additional information from this database?

a. Boolean Injection
b. Error-Based Injection
c. Time-Based Injection
d. Out-of-Band Injection

While working as a cyber consultant for an organization, you learn an attacker recently breached their database! While looking through the web request logs you see thousands of requests containing queries with the SLEEP() command. What type of injection did this attacker likely use?

a. Time-Based Injection
b. Error-Based Injection
c. Boolean Injection
d. Out-of-Band Injection

Which of these is an example of input sanitization?

a. Passing use inpu as parameters to a pre-prepared statement.
b. Programming a firewall to drop network packets containing potential SQL injections attacks.
c. Removing characters such `'`, `;`, and `\--` to prevent them from impacting a query.
d. Cleaning out sensitive user data from requests.

Which of these is a benefit of prepared statements?

a. Prepared statements active search thorugh the input and remove potentially dangerous characters.
b. Prepared statements will add a limit to the amount of information returned by a statement if the SQL query could potentially return too much data.
c. They are 1--% secure form SQL injection attacks, regardless of how they are implemented.
d. Prepared statements improve query efficiency, while also adding additional security when implemented properly

SQL injections affect ALL databases the same regardless of language.

a. False
b. True

Which of the following is NOT a type of SQL injection?

a. Time-Based Injection
b. Error-Based Injection
c. Boolean Injection
d. Out-of-Band Injection
e. Union-Based Injection
f. Query-Based Injection

Consider the following SQLite database prepared statement that uses array syntax:

```sql
db.all("SELECT city, state FROM politicians WHERE first_name = ? AND last_name = ?",
   [ politician_name[0], politician_name[1] ],
   (error, results) => {
      ...
});
```

Reconstruct this query using named placeholders.

```sql
db.all("SELECT city, state FROM politicians WHERE first_name = ___ AND last_name = ___",
   { $first: ___, $last: ___ },
   (error, results) => {
      ...
});
```

Which of the following techniques does NOT help prevent SQL injection attacks?

a. Data Sanitization
b. Input Validation
c. Prepared Statements
d. Template Literals
