# What is a Loop?

Let's consider a situation when we want to print the text `Hello, World!` five times.

Here's a simple C program that does this:

```c
#include <stdio.h>

int main() {
   printf("Hello, World!\n");
   printf("Hello, World!\n");
   printf("Hello, World!\n");
   printf("Hello, World!\n");
   printf("Hello, World!\n");
}
```

When the above program is executed, it produces the following result:

```bash
Hello, World!
Hello, World!
Hello, World!
Hello, World!
Hello, World!
```

Simple. However, let's consider another situation when we want to write `Hello, World!` a thousand times. We can certainly not write `printf()` statements a thousand times!

Almost all the programming languages provide a concept called loop, which helps in executing one or more statements up to a desired number of times. All high-level programming languages provide various forms of loops, which can be used to execute one or more statements repeatedly.

Let's write the above C program with the help of a while loop and later, we will discuss how this loop works:

```c
#include <stdio.h>

int main() {
   int i = 0;
   
   while (i < 5) {
      printf("Hello, World!\n");
      i = i + 1;
   }
}
```

When the above program is executed, it produces the following result:

```bash
Hello, World!
Hello, World!
Hello, World!
Hello, World!
Hello, World!
```

The above program makes use of a `while` loop, which is being used to execute a set of programming statements enclosed within `{` and `}`. Here, the computer first checks whether the given condition, i.e., variable `a` is less than `5` or not and if it finds the condition is true, then the loop body is entered to execute the given statements.

## Video

<iframe width="560" height="315" src="https://www.youtube.com/embed/wxds6MAtUQ0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Infiite Loops

Avoid infinite loops. Make sure the condition in a loop eventually becomes false—otherwise, the loop will never terminate! The statements in the following while loop execute forever because the condition never becomes false:

```js
// Infinite loops are bad!
while (true) {
  console.log('Hello, world!');
}
```
