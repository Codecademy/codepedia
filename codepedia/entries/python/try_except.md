# Try/Except

Python provides a way to handle exceptions, using `try/except` statements. This allows Python code to continue running without having to terminate unexpectedly due to an exception.

A `try/except` statement has the following structure:
```py
try:
  # Code to try running which will be checked for errors.
except:
  # Code to run if an exception was raised from the code in the try block.
```

The flow of the code above will be as follows: The program will try to run the code in the `try` block. If an exception is ever thrown from the code, it will be handled by the `except` statement, and the code in the `except` block will run instead, and then the program will continue its normal flow of execution. If no exception was thrown from the `try` block code, then the `except` block is skipped, and the program will continue its normal flow of execution.

For example, an exception can occur if you try to divide by 0 in Python. Without a `try/except` statement, the program will print out the error message and terminate immediately. By adding one in, we can handle this error, and continue executing the rest of the program without terminating.

```py
result = 1.0

try:
  quotient = result / 0
except:
  print("Error has occurred in the code")

print("The rest of the code will continue running")

# Prints out: 
# "Error has occurred in the code"
# "The rest of the code will continue running"
```

## Catching specific errors
You can specify types of errors to catch, so that different actions are taken depending on the type of error that occurred. By default, `except` will catch any type of error. To specify types of errors, we add them after the keyword `except`.

The following example catches the `ZeroDivisionError` that gets thrown when arithmetic with division by zero is attempted. 
```py
try:
  print(1 / 0)
except ZeroDivisionError:
  print("Can't divide by zero!")
  
# Prints out:
# "Can't divide by zero!"
```

You can add multiple `except` statements to handle specific errors in your program. You can also include an `except` at the end, as a default, to catch all other exceptions thrown that were not specified.
```py
try:
  # Code to test out
except TypeError:
  # Handle a type error
except NameError:
  # Handle a name error
except:
  # Handle all other errors. Default case.
```

## Finally
An optional `finally` statement can be added after a `try/except` statement, which will always execute its code regardless of whether or not an exception has been raised or not. They are useful for performing things such as cleanup or closing files.
```py
try:
  print(1 / 0)
except:
  print("Can't divide by zero!")
finally:
  print("This code always runs")
  
# Prints out:
# "Can't divide by zero!"
# "This code always runs"
```
