# Dictionaries in Python

A dictionary is an unordered set of key: value pairs. It provides a way to map pieces of data to each other, and allows for quick access of values associated to keys.

The syntax of a dictionary is as follows:
```py
# Dictionary storing class averages:
grades = {"bob": 85.6, "alice": 89.4, "chris": 93.5}
```

Each entry in a dictionary is a key: value pair, where the key and value are separated by a colon `:`. Each key: value pair is separated by a comma.

Keys must be immutable data types such as numbers and strings, because keys should not change. Keys cannot be lists, as lists are mutable and can change. Trying to create a key as a mutable data type will throw a `TypeError`.

Values can be any type such as numbers, strings, lists, or even other dictionaries.

## Creating a dictionary
A dictionary is created using curly braces `{}`.

The following creates an empty dictionary:
```py
my_dict = {}
```

A dictionary can also created with key: value pairs already provided:
```py
my_dict = {key1: value1, key2: value2}
```

## Accessing values in a dictionary
Values of a dictionary are accessed by their keys. The following will return the value associated with the key:
```py
print(grades["bob"]) # 85.6
```

When you try to access a key that does not exist in a dictionary, it will throw a `KeyError`.

## Safely accessing keys using .get()
To avoid `KeyError`s when accessing keys which may or may not exist in a dictionary, the `.get()` method can be used. It will return `None` if there is no such key, or return the value associated with the existing key.
```py
print(grades.get("rei")) # None
```

## Adding a new key: value pair
Key: value pairs can be added to a dictioanry using the following syntax:
```py
my_dict[new_key] = new_value
```

For example:
```py
grades["rei"] = 92.0

# grades: {"bob": 85.6, "alice": 89.4, "chris": 93.5, "rei": 92.0}
```

## Updating the value of an existing key
The value of an existing key can be updated using the following syntax:
```py
dict[key] = new_value
```
This uses the same syntax as adding a new key: value pair. It will add the new key: value pair if the key does not exist, or update the value of the existing key.

## .update() method
The `.update()` method lets us add multiple key: value pairs to a dictionary. If some keys already exist when performing `.update()`, it will update the values of the existing keys to the new values.

```py
pet_dict = {"Don": "dog", "Carla": "cat", "Frank": "frog"}
pet_dict.update({"Snape": "snake", "Harry": "hamster"})

# pet_dict: {"Don": "dog", "Carla": "cat", "Frank": "frog", "Snape": "snake", "Harry": "hamster"}
```

`.update()` can also be used to merge dictionaries.
```py
pet_dict1 = {"Don": "dog", "Carla": "cat", "Frank": "frog"}
pet_dict2 = {"Paul": "parrot"}
pet_dict1.update(pet_dict2) # {"Don": "dog", "Carla": "cat", "Frank": "frog", "Paul": "parrot"}
```

The key: value pairs of the second dictionary will be added to the original dictionary on which the `.update()` method was called on. If there are keys that exist in both of the dictionaries when performing `.update()`, it will update the existing keys in the first dictionary with the values in the second dictionary.

## Creating a dictionary using list comprehension
List comprehension can be used to create dictionaries in a convenient way. It uses the following syntax:
```py
dict = {key: value for key, value in zip(list1, list2)}
```

The values of the first list become the keys, and the values of the second list become the values in the newly created dictionary.

## Removing an entry from a dictionary using .pop()
The `.pop()` method removes a key: value pair from a dictionary, and returns the value of the corresponding key. If the key does not exist, we can set a default return value.
```py
grades = {"bob": 85.6, "alice": 89.4, "chris": 93.5}
print(grades.pop("ron", "No such student")) # No such student
```

## Get all keys using .keys()
The `.keys()` method returns a `dict_keys` object, a view object which provides all the keys of the dictionary. This can be used to do things such as iterate over all keys of a dictionary.
```py
for student in grades.keys():
  print(student)
  
# bob
# alice
# chris
```

## Get all values using .values()
The `.values()` method returns a `dict_values` object, a view object, similar to the `dict_keys` object but for all values in a dictionary. It can be used for things such as iterating over all values of a dictionary.
```py
for grade in grades.values():
  print(grade)

# 85.6
# 89.4
# 93.5
```

## Get all keys and values using .items()
The `.items()` method returns all the key: value pairs as a `dict_list` object. Each item in the `dict_list` is a tuple consisting of each key: value pair in the form: `(key, value)`.
```py
for student, grade in grades.items():
  print(student + ": " + str(grade))
  
# bob: 85.6
# alice: 89.4
# chris: 93.5
```
