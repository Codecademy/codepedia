# Input in Python
Python uses the `input()` function to take in user input.

The function takes as an argument a prompt message, which is printed out to the console. The program will then wait for the user to type some input and continues execution once the user presses the `ENTER` or `RETURN` key. The input is converted into a string, and then it is returned from the function. 

For example, the following will prompt the user to provide a name, will store the input into a variable, and then print a message.
```py
name = input("What is your name? ")
print("Hi " + name)
```

When this program is run, the output will look like the following.
```
What is your name?
```

It will then wait for the user to type some input.
```
What is your name? Joe
```

After pressing the `ENTER` or `RETURN` key, it will accept the input, and return it as a string. Then the rest of the program will continue execution.
```
What is your name? Joe
Hi Joe
```
