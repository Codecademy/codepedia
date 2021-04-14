# Tuples in Python
A tuple is an ordered, immutable, collection of items. It is like a list, where items are ordered and indexed, but once created, a tuple cannot be changed. We cannot add, remove, or change the items of a tuple. As a result, tuples are good for storing groups of items that are related to each other, which have no reason to change.

```py
my_tuple = ("jon", 34, "engineer")
```

## Creating a tuple
A tuple is created using a pair of parentheses `()`.

```py
# Empty tuple
my_tuple = ()

# Tuple with elements
profile = ("steph", 33, True)
```

When creating a tuple with only a single element, you must provide a comma after the only element. Otherwise, Python will not recognize it as a tuple.
```py
my_tuple = (1,)
```

You can also pass in sequences such as lists, strings, and tuples when creating a tuple.
```py
tuple((False, 1, 2)) # (False, 1, 2)
tuple([0, 1, 2]) # (0, 1, 2)
tuple("abc") # ("a", "b", "c")
```

## Concatenating tuples
Tuples can be combined using the `+` operator.
```py
tuple1 = (1, 4, 9)
tuple2 = (16, 25, 36)
combined_tuple = tuple1 + tuple2 # (1, 4, 9, 16, 25, 36)
```

## Accessing items of a tuple by index
Like with a list, items of a tuple can be accessed by index, starting from 0.
```py
profile = ("steph", 33, True)

print(profile[0]) # "steph"
```

## Tuple slicing
You can also use slicing to access multiple items of a tuple.
```py
squares = (1, 4, 9, 25)

print(squares[0:2]) # (1, 4)
print(squares[:3]) # (1, 4, 9)
print(squares[2:]) # (9, 25)
```

## Size of a tuple
You can use the `len()` function to get the size of a tuple.
```py
squares = (1, 4, 9, 25)
print(len(squares)) # 4
```

## Iterating over items of a tuple
A for loop can be used to iterate over the items of a tuple.
```py
squares = (1, 4, 9, 25)
for square in squares:
  print(square)
  
# 1
# 4
# 9
# 25
```

## Check if an item is in a tuple
The `in` keyword can be used to check if an item exists in a tuple.
```py
squares = (1, 4, 9, 25)
print(49 in squares) # False
```

## `.count()` to get occurrences of item in tuple
The `.count()` method returns the number of occurrences of a specified value in a tuple.
```py
my_tuple = (1, 1, 1, 3, 3, 2, 2, 4)
print(my_tuple.count(1)) # 3
```

## `.index()` to get first index of specific item in tuple
The `.index()` method returns the first index of a specified value in a tuple. If the value does not exist in the tuple, it will throw a `ValueError`.
```py
my_tuple = (1, 1, 1, 3, 3, 2, 2, 4)
print(my_tuple.count(3)) # 3
```
