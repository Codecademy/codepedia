# Modules

In Python, code can be packaged into files, which are also called modules. A Python file is essentially a module, where the name of the module is the file name, excluding the suffix `.py`. For example, the file named `my_functions.py` would be a module named `my_functions`. Modules are also referred to as "libraries" or "packages". 

Modules are useful because they allow us to make code reusable. We can import other modules into files so that we can reuse functionality and definitions that have already been written, without the need to rewrite them each time we need to use them.

## Namespace
A namespace is how Python implements scope in its programs. Every module has a namespace, which isolates functions, classes and variables defined in it. When importing another module into your current program, the namespace of that module is separate from the namespace of your current, or local, namespace where the code is being run. By default, when you import a module, the namespace that you imported matches that module's name. 

## Importing modules
To utilize the functionalities of a module in another file, it needs to be imported. We can import entire modules, or just specific functions from a module.

### Importing the entire module
When importing the entire module in the following manner, its functions and definitions are accessible by using the module's name followed by a period `.` and the function or definition being accessed.
```py
import module

module.some_function()
```

### Importing specific functions from the module
```py
from module import function

function()
```

### Importing everything from the module
```py
from module import *

module_function1()
module_function2()
```

One thing to note is that `import *` is considered bad practice as it could pollute the local namespace. This is because, if you defined a function in your local namespace that has the same name as a function from the imported module, this could cause conflict. 

### Importing from a user defined file
Python files are modules, so they can be imported into other files to use its definitions and functions.
```py
# file1.py contents
def file1_function():
  pass
```
We can import the `file1` module into another file:
```py
# file2.py contents
import file1

file1.file1_function()
```

## Aliasing modules and function using `as`
Modules and functions can be aliased using the `as` keyword. This can be useful for improving code readability.
```py
import long_module_name as short_name
short_name.some_function()

# Example of a commonly used alias:
from matplotlib import pyplot as plt
plt.plot()
```
