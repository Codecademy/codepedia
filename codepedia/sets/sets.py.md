# Sets in Python
A set is an unordered collection of data. It is used for membership testing and preventing duplicate entries. Sets can contain any types of data.

```py
my_set = {1, 2, 3, "a", "b", "c", False}
```

Sets are unordered and unindexed, so you cannot access specific items of a list. As a result, items in a set also cannot be changed, but they can be removed and new items can be added to a set.

## Creating a set
A set is formed by a pair of curly braces `{}` and can be initialized with items separated by commas. If duplicate values are passed into the set, those will be removed automatically.
```py
names = {"alice", "bob", "kevin", "alice"} # {"alice", "bob", "kevin"}
```

## Creating a set using `set()`
When creating a set with no initial values, you must use the `set()` function. Trying to create an empty set using curly braces `{}` will result in creating an empty dictionary instead.

```py
# Creates an empty dictionary:
not_a_set = {}
```

You can pass in different objects into the `set()` function to create sets with those values.
```py
set((1, 2, 3)) # {1, 2, 3}
set("abc") # {"a", "b", "c"}
set([1, 2, 2, 3, 2, 1]) # {1, 2, 3}
```

## Adding an item to a set using `.add()`
To add a new item to a set, you can use the `.add()` method. If the item being added already exists in the set, the set remains unchanged because items are unique.
```py
names = {"alice", "bob", "kevin"}
names.add("errol") # {"alice", "bob", "kevin", "errol"}
```

## Removing an item from a set using `.remove()`
Items can be removed from a set using the `.remove()` method. If the item does not exist in the set, it will throw a `KeyError`.
```py
names = {"alice", "bob", "kevin", "errol"}
names.remove("bob") # {"alice", "kevin", "errol"}
```

## `len()` to get the size of a set
The `len()` function can be used to get the number of items in a set.
```py
names = {"alice", "bob", "kevin"}
print(len(names)) # 3
```

## Check if an item exists in a set using the `in` keyword
The `in` keyword can be used to check if a set contains a specified item.
```py
names = {"alice", "bob", "kevin"}
if "cathy" in names:
  print(True)
else:
  print(False)
  
# False
```

## Set operations
Set operations can be used to create new sets from existing ones.

```py
A = {2, 3, 4, 5}
B = {2, 4, 5, 6, 7}
```

### Union
The union of two sets results in all elements of two sets. Union can be performed using the `|` operator, or the `.union()` method.
```py
A.union(B) # {2, 3, 4, 5, 6, 7}
```

### Difference 
The difference of two sets is the elements that appear in the first set, but not in the second set. This can be obtained using the `-` operator, or the `.difference()` method.
```py
A.difference(B) # {3}
B.difference(A) # {6, 7}
```

### Intersection
The intersection of two sets results in only the elements that appear were in both sets. The intersection of two sets can be obtained using the `&` operator or the `.intersection()` method.
```py
A.intersection(B) # {2, 4, 5}
```

### Symmetric Difference
The symmetric difference results in the elements which are in either of the sets, but not in both. This can be obtained using the `^` operator or the `.symmetric_difference()` method.
```py
print(A.symmetric_difference(B)) # {3, 6, 7}
```

## Checking if a set is a subset of another set using `.issubset()`
A set is a subset of another set if all the elements of the set are also in the other set. For example, 
```
A = {1, 2, 3, 4}
B = {1, 2, 3, 4, 5}
```
The set `A` is a subset of `B`, because all its items appear in `B`. However, `B` is not a subset of `A`, because `A` does not contain the item `5`.

The `.issubset()` method returns `True` is the set is a subset of another set, and `False` otherwise. 
```py
print(A.issubset(B)) # True
print(B.issubset(A)) # False
```

## Creating a set using set comprehension
A set can be created in a similar shorthand to list comprehension using set comprehension. It is similar to a list, but instead if square brackets `[]`, we must use curly braces `{}`.
```py
letters = {c for c in "python"} # {"p", "y", "t", "h", "o", "n"}
```
