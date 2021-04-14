# Lists in Python

A list is an unordered collection of objects in Python. It allows for easy use of a set of data.

The syntax of a list is as follows:
```py
my_list = [1, 2, 3]
```

Items of a list can be any data type such as numbers, strings, dictionaries, and even other lists. Lists can contain items that are of different data types from each other.
```py
my_list = ["hello", [1, 2, 3], 3.14]
```

## Creating a list
A list is created using square brackets `[]`. Each item in a list is separated by a comma. 

The following example creates an empty list:
```py
my_list = []
```

A list can also be created with values already provided:
```py
my_list = [1, 2, 3, 4]
```

## Accessing items in a list
Items in a list are 0-indexed, so the first item is at index 0, the second item is at index 1, and so on.
```py
my_list = [1, 2, 3, 4]
print(my_list[0]) # 1
```

Items in a list can also be accessed by their position relative to the end of the list, using negative indices. Index -1 will access the last element, index -2 will access the second to last element, etc.
```py
my_list = [1, 2, 3, 4]
print(my_list[-2]) # 3
```

## Slicing a list to select multiple elements
List slicing can be used to select a sub-list of items from a specified range of indices. The general syntax for list slicing is the following:

```py
my_list[start:end]
```

It will select the range of items in the list from the start index, up to but excluding the end index.

For example:
```py
my_list = [10, 20, 30, 40, 50, 60]
print(my_list[1:4]) # [20, 30, 40]
```

The start and end indices can also be excluded.

If the start index is excluded, it will select all items from the beginning of the list up to the end index:
```py
my_list = [10, 20, 30, 40, 50, 60]
print(my_list[:4]) # [10, 20, 30, 40]
```

If the end index is excluded, it will select all items from the start index, up to the end of the list:
```py
my_list = [10, 20, 30, 40, 50, 60]
print(my_list[3:]) # [40, 50, 60]
```

If neither start or end indices are provided, it will select all items in the list:
```py
my_list = [10, 20, 30, 40, 50, 60]
print(my_list[:]) # [10, 20, 30, 40, 50, 60]
```

## zip() function
The `zip()` function takes two (or more) lists as input and returns a zip object containing a list of pairs which are of type tuple. Each pair contains one element from each of the input lists.
```py
list1 = [1, 2, 3]
list2 = [1, 4, 9]
print(list(zip(list1, list2))) # [(1, 1), (2, 4), (3, 9)]
# 
```

If the lists have different lengths, it will pair the elements up to the last index of the shorter list.
```py
list1 = [1, 2, 3]
list2 = [1, 4]
print(list(zip(list1, list2))) # [(1, 1), (2, 4)]
```

## Grow a list using `.append()`
The `.append()` method adds a single element to the end of the list.
```py
my_list = [1, 2, 3]
my_list.append(4) # [1, 2, 3, 4]
```

## Combine lists using +
Multiple lists can be combined using the `+` operator. All elements of the second list will follow all elements from the first list in the result list.
```py
list1 = [4, 5, 6]
list2 = [1, 2, 3]
print(list1 + list2) # [4, 5, 6, 1, 2, 3]
```

## .count() method
The `.count()` method returns the number of matching entries in the list.
```py
my_list = ["cat", "dog", "hamster", "dog"]
print(my_list.count("dog")) # 2
```

## Sorting a list using the .sort() method
The `.sort()` method sorts the contents of the list it is called on. For instance, if the values are numbers, they are sorted from smallest to largest, and if they are strings, they are sorted in lexicographical order.

This method modifies the original list, and has no return value.
```py
my_list = [4, 3, 1, 2]
my_list.sort(); # [1, 2, 3, 4]
```

## Sorting a list using the sorted() function
The `sorted()` function returns a new list of the same elements as the inputted list in sorted order. Unlike the `.sort()` method, it does not modify the original list.

```py
my_list = ["cat", "dog", "hamster", "dog", "parrot"]
print(sorted(my_list)) # ["cat", "dog", "dog", "hamster", "parrot"]
print(my_list) # ["cat", "dog", "hamster", "dog", "parrot"]
```

## range() function
The `range()` function can be used to create lists of consecutive numbers.
If provided a single argument, it will return a range of values from 0 up to, but excluding the end value.
```py
# range(end)
range(8) # 0, 1, ..., 7
```

If provided two arguments, it will return a range of values from the start value up to, but excluding the end value.
```py
# range(start, end)
range(2, 8) # 2, 3, ..., 7
```

If provided three arguments, the third argument will be a value to increase each element of the range by.
```py
# range(start, end, step)
range(2, 8, 3) # 2, 5
```

## Iterating over the items of a list
A for loop can be used to iterate over each item of a list.
```py
for item in [1, 4, 9, 25]:
  print(item)

# 1
# 4
# 9
# 25
```

## Checking if item exists in a list
To check if an item exists in a list, the `in` keyword can be used.
```py
if 1 in [2, 3, 4]:
  print(True)
else:
  print(False)
  
# False
```

## List comprehension
Python provides a convenient shorthand to create a list using one line of code, using list comprehension.
```py
squares = [x**2 for x in range(1, 5)] # [1, 4, 9, 16]
```

The above is equivalent to creating the list using a for loop, in the following example:
```py
squares = []

for x in range(1, 5):
  squares.append(x**2)
```
