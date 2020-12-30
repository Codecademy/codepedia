# Comments in Python

A comment is a piece of text within a program that is not executed. It can be used to provide additional information to aid in understanding the code.

## Syntax

The `#` character is used to start a comment and it continues until the end of the line.

```py
# Comment on a single line
 
user = "JDoe" # Comment after code
```

## Multi-line Comments

Python does not really have a syntax for multi line comments.

To add a multiline comment you could insert a `#` for each line:

```py
# This is a comment
# written in
# more than just one line
print("Hello, World!")
```

Or, not quite as intended, you can use a multiline string.

Since Python will ignore string literals that are not assigned to a variable, you can add a multiline string (triple quotes) in your code, and place your comment inside it:

```py
"""
This is a comment
written in
more than just one line
"""
print("Hello, World!")
```

As long as the string is not assigned to a variable, Python will read the code, but then ignore it, and you have made a multiline comment.
