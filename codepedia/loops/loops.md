
Let's consider a situation when you want to print `Hello, World!` five times.

Here is a simple C program to do the same:

```c
#include <stdio.h>

int main() {
   printf( "Hello, World!\n");
   printf( "Hello, World!\n");
   printf( "Hello, World!\n");
   printf( "Hello, World!\n");
   printf( "Hello, World!\n");
}
```

When the above program is executed, it produces the following result:

```
Hello, World!
Hello, World!
Hello, World!
Hello, World!
Hello, World!
```

It was simple, but again, let's consider another situation when you want to write `Hello, World!` a thousand times. We can certainly not write `printf()` statements a thousand times. 

Almost all the programming languages provide a concept called loop, which helps in executing one or more statements up to a desired number of times. All high-level programming languages provide various forms of loops, which can be used to execute one or more statements repeatedly.

Let's write the above C program with the help of a while loop and later, we will discuss how this loop works:

```c
#include <stdio.h>

int main() {
   int i = 0;
   
   while ( i < 5 ) {
      printf("Hello, World!\n");
      i = i + 1;
   }
}
```

When the above program is executed, it produces the following result:

```
Hello, World!
Hello, World!
Hello, World!
Hello, World!
Hello, World!
```

The above program makes use of a `while` loop, which is being used to execute a set of programming statements enclosed within `{` and `}`. Here, the computer first checks whether the given condition, i.e., variable `a` is less than `5` or not and if it finds the condition is true, then the loop body is entered to execute the given statements.

<iframe width="560" height="315" src="https://www.youtube.com/embed/wxds6MAtUQ0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>