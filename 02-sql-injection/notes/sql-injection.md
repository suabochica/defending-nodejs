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

'TODO'

## What are SQL Injections?

'TODO'

### Union-Based Injections

'TODO'

### Error-Based Injections

'TODO'

### Boolean-Based Injections

'TODO'

### Time-Based Injections

'TODO'

### Out-of-Band SQL Injections

'TODO'

## SQL Injection Prevetion

There are two main methods for preventing injection attacks: sanitization and prepared statements.

### Sanitization

'TODO'

### Prepared Statements

'TODO'

## Conclusion

Since databases are a crucial part of many applications, SQL injection flaws continue to persist. Whether you’re developing an application or doing penetration testing to improve security, it’s crucial to understand the different forms of these SQL exploits!
