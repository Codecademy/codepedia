# Comments in SQL

A comment is a piece of text within a program that is not executed. It can be used to provide additional information to aid in understanding the code, or to prevent execution of SQL statements.

## Single-line Comments

Single line comments start with `--`. Any text between `--` and the end of the line will be ignored (will not be executed).

The following example uses a single-line comment as an explanation:

```sql
-- Select all:
SELECT * FROM customers;
```

The following example uses a single-line comment to ignore a statement:

```sql
-- SELECT * FROM customers;
SELECT * FROM products;
```

## Multi-line Comments

Multi-line comments start with `/*` and end with `*/`.

Any text between `/*` and `*/` will be ignored.

The following example uses a multi-line comment as an explanation:

```sql
/* Select everything
from the customers table */
SELECT * FROM customers;
```

The following example uses a multi-line comment to ignore many statements:

```sql
/* SELECT * FROM customers;
SELECT * FROM products;
SELECT * FROM orders;
SELECT * FROM categories; */
SELECT * FROM suppliers;
```

To ignore just a part of a statement, also use the `/*` `*/` comment.

The following example uses a comment to ignore part of a line:

```sql
SELECT id, customer_name, /* city, */ country 
FROM customers;
```