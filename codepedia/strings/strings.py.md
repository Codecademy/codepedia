# Strings in Python

A string is a sequence of characters contained within a pair of single quotes ('') or double quotes(""). They provide a way to store something like a word, sentence, or whole paragraph. They can be any length and can contain letters, numbers, symbols, and spaces.

```py
greeting = "Hello there!"
```

## Strings are immutable
Strings are immutable, or cannot change. Each time we perform an operation on a string, it will create an entirely new string.

## Accessing characters of a string
A string can be thought of as a list of characters. Each character has an index, starting from 0.
```py
name = "phillis"
name[0] # "p"
```

If you try to access an index out of bounds, it will return an `IndexError`. 
```py
name = "phillis"
name[8] # Throws an IndexError
```

You can access characters backwards from the end of a string using negative indices. An index of -1 accesses the last character, -2 accesses the second to last character, etc.

```py
food = "burger"
food[-2] # "e"
```

## len() to get the length of a string
The `len()` function can be used to get the length of a string.
```py
greeting = "Hello there!"
print(len(greeting)) # 12
```

## Iterating over characters of a string
You can iterate over each character of a string, similar to how you can iterate over the items of a list.
```py
number = "123"
for c in number:
  print(c)
  
# 1
# 2
# 3
```

## Check if a string contains a substring
The `in` keyword can be used to check if a string contains a substring.
```py
greeting = "Hello there!"

if "the" in greeting:
  print(True)
else:
  print(False)

if "a" in greeting:
  print(True)
else:
  print(False)
  
# True
# False
```

## Slicing a string
Chunks of a string can be accessed using string slicing. The syntax of string slicing is as follows:
```py
my_string[start:end]
```

It will include all characters from the start index, up to, but excluding the end index. For example:

```py
name = "Conor"
name[1:4] # "ono"
```

The start and end indices can be omitted. If the start index is omitted, it will select all characters from the beginning of the string up to the end index, exclusive. If the end index is omitted, it will select all characters from the start index to the end of the string.
```py
name = "Francis"
name[:3] # Fra
name[5:] # is
```

You can also use negative indices for the indices. The following example selects the last 3 characters of the string.
```py
name = "Donovan"
name[-3:] # van
```

## Concatenating strings together using +
Strings can be combined, or concatenated, using the `+` operator. Because strings are immutable, concatenating multiple strings will create an entirely new string.
```py
str1 = "Happy"
str2 = "New Year"
print(str1 + str2) # HappyNew Year
```

## .lower() method
The `.lower()` method can be used to create a new string where all the characters are lower case.
```py
message = "HELLO"
quiet_message = message.lower() # hello
```

## .upper() method
The `.upper()` method can be used to create a new string where all the characters are upper case.
```py
cheer = "let's go"
print(cheer.upper()) # LET'S GO
```

## .title() method
The `.title()` method can be used to create a new string where the first letters of each word is capitalized.
```py
book = "tortoise and the hare"
print(book.title()) # Tortoise And The Hare
```

## .split()
The `.split()` method takes an argument, a delimiter, and returns a list of substrings found between each occurrence of the delimiter. If no delimiter is provided, it wil default to splitting at spaces. If you split on a string that ends with the delimiter, the last element in the list will be an empty string.
```py
message = "meet#me#at#the#gym"
print(message.split("#")) # ["meet", "me", "at", "the", "gym"]
```

## .join()
The `.join()` method joins a list of strings together with a given delimiter. It is essentially the opposite of the `.split()` method.
```py
secret = "xyz".join(["super", "secret", "code"])
print(secret) # superxyzsecretxyzcode
```

## .strip()
The `.strip()` method takes a string argument and removes all leading and trailing occurrences of the string from the beginning and end of the string the method is called on.
```py
message = ".....hi. my name is neo....."
print(message.strip(".")) # hi. my name is neo
```

If no argument is provided, it will strip on whitespace.
```py
message = "    coding is fun!     "
print(message.strip()) # coding is fun!
```

## .replace()
The `.replace()` method replaces all instances of the first argument in the string with the second argument.
```py
sentence = "fire is strong against rock"
print(sentence.replace("fire", "water")) # "water is strong against rock"
```

## .find()
The `.find()` method takes an argument and searches the string for that argument. It will return the start index of the first occurrence it finds the argument in the string. If the argument is not found in the string, it returns -1.
```py
"smooth".find("t") # 4
```

## .format()
The `.format()` method provides a way to include variables in strings. It takes variables as arguments, and includes them in the string it is run on. It helps to improve code legibility and reusability.
```py
plan = "First I will {}, then I will {}".format("code", "sleep")
print(plan) # First I will code, then I will sleep
```

The curly braces `{}` are used as placeholders for where the variables will be imported into the string. It can take as many arguments as there are `{}` in the string, and will add them in the string in the order they were passed in as arguments.

You can also provide keyword arguments, so that the variables can appear in a specified order. As long as keyword arguments are set, the order they are input as arguments will not matter.
```py
str1 = "{var2} {var1}".format(var1="World", var2="Hello")
str2 = "{var2} {var1}".format(var2="Hello", var1="World")
print(str1) # Hello World
print(str2) # Hello World
```
