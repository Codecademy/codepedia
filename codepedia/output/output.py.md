# Python output
Python uses the `print()` function to tell the computer to "talk". The result that appears from the `print()` function to the console is referred to as ouput.

The `print()` function can take any object as input, and will output the object converted to a string to the console.
```py
print([1, 2, 3]) # [1, 2, 3]
print("Hi") # Hi
print(42) # 42
```

If the function is called without any arguments, it will produce a newline character by default, printing a blank line. This can be used to separate output by blank lines.
```py
print("Line 1")
print()
print("Line 3")
```

The output of the above will look like the following.
```
Line 1

Line 3
```

## Passing in an expression
If an expression is passed into the function, the result of the evaluated expression is printed out.
```py
print(10 * (5 / 2)) # 25.0
```

## Passing in multiple arguments
Multiple arguments can be passed into the `print()` function, separated by commas. Each argument will be printed after each other on the same line, and will be separated by an empty space.
```py
print("Hello ", 1, 2)
# Hello 1 2
```

## Separator between multiple arguments
By default, multiple arguments will be output with an empty space between each one. You can specify what separator to have between each argument by setting the `sep` parameter.
```py
print("Hello", 1, 2, sep="...")
# Hello...1...2
```

## `end` parameter
By default, each `print()` is ended with a `\n`, signifying a new line, resulting in each `print()` being on a separate line. The end can be changed by specifying the `end` parameter.

For example, the following would output each `print()` call on a separate line.
```py
print("Hello")
print("World")
```
Outputs:
```
Hello
World
```

By changing the `end` parameter to something other than `\n`, it will no longer default to printing on separate lines.
```py
print("Hello", end="...")
print("World")
```
Outputs:
```
Hello...World
```
