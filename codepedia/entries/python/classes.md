# Classes

Classes are a template for data types from which objects, called instances, are created. They can describe the kinds of information that the class holds, and also how a programmer interacts with that data.

## Creating a class
In Python, classes are defined using the class keyword. 

```py
class Animal:
  def __init__(self, name, leg_count):
    self.name = name
    self.leg_count = leg_count
```

Class definitions cannot be empty, so the `pass` statement can be used as a placeholder to avoid errors.

```py
class Home:
  pass
```

## Creating instances of a class
Objects can be created from classes. These objects are called "instances" of a class, and when we create an instance, that is known as "instantiating" a class. To create an instance of a class, you set a variable equal to the class name followed by parentheses `()`.
```py
my_home = Home()
# The instance name is my_home, and the class is Home.
```

## Class methods
Methods are functions defined as part of a class. The first parameter for any class method is the actual object calling the method, usually called `self`. For example, the following class `Home` has a method called `.paint_wall()`. The first parameter is `self`, and the second parameter is `color`. When calling a class method, no argument is provided for the parameter `self`, but arguments must be provided for each following parameter.
```py
class Home:
  def paint_wall(self, color):
    # ...

# Creating an instance of the class.
blue_home = Home()

# Calling the method on the instance.
blue_home.paint_wall("blue")
```

## Class attributes
Class attributes are variables that are defined outside of all methods and have the same value for every instance of the class.
```py
class Bird:
  # Class attribute
  leg_count = 2
  
parakeet = Bird()
parrot = Bird()

print(parakeet.leg_count) # 2
print(parrot.leg_count) # 2
```

## Instance variables
Instance variables are variables that are unique to each instance of a class. They can be set initially within the `__init__()` method when the instance is created, or instance variables can be added by setting them to values. 
```py
class Dog:
  def __init__(self, breed):
    # Instance variable:
    self.breed = breed

dog = Dog("Jindo")

# We give the instance dog a new instance variable called name and set it to the value "Ruff".
dog.name = "Ruff"
```

## __init__() method
This method is used to initialize a newly created object. It is called each time a class is instantiated. Instance variables are set within the `__init__()` method block. Input parameters can be set for this method, which are passed during instantiation.

```py
class Home:
  def __init__(self, rooms, stories):
    # Setting instance variables
    self.rooms = rooms
    self.stories = stories
    
home = Home(4, 2)
print(home.rooms)   # 4
print(home.stories) # 2
```

## __repr__() method
The `__repr__()` method returns the string representation of the class. One way to see the string representation is to call `print()` on the instance.
```py
class Home:
  def __init__(self, rooms, stories):
    self.rooms = rooms
    self.stories = stories
    
  def __repr__(self):
    return "Home with {} rooms and {} stories".format(self.rooms, self.stories)
    
home1 = Home(4, 2)
print(home1) # Home with 4 rooms and 2 stories

home2 = Home(5, 2)
print(home2) # Home with 5 rooms and 2 stories
```

## Accessing methods and variables within the class
Within the code of the class, we can call its methods and access its variables. We do this by using `self` followed by a period `.` and then followed by the method or variable.
```py
class Person:
  def __init__(self, name):
    self.name = name
    
  def sayHi(self):
    # Calls its method .getName()
    print("Hi my name is {}".format(self.getName()))
    
  def getName(self):
    # Accesses the name variable
    return self.name

bob = Person("Bob")
bob.sayHi() # "Hi my name is Bob"
```

## type() function
The `type()` function returns the data type of the argument passed to it. When the argument is an instance of a class, it returns the class that it is an instance of.
```py
home = Home(4, 2)
print(type(home)) # <class '__main__.Home'>
```

## hasattr()
The `hasattr()` function can be used to check if an instance of a class has an attribute. It returns `True` if it does have the attribute, and `False` otherwise. 
```py
home = Home(4, 2)

print(hasattr(home, 'rooms')) # True
print(hasattr(home, 'year')) # False
```

## Deleting objects
Objects, or instances of classes, can be deleted using the `del` keyword.
```py
del instance_name
```

## Deleting attributes
Attributes of objects can be deleted using the `del` keyword.
```py
del instance_name.attribute_name
```
