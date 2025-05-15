## Function Composition

Function composition is a fundamental concept in functional programming. It refers to combining two or more functions to produce a new function, where the output of one function becomes the input of the next.

In simpler terms:

- Compose functions like a pipeline, where the result flows through each function step by step.

The idea is to build complex behavior by reusing small, focused functions.

```javascript
const result = f(g(x));
```

- Examples:

```javascript
const trim = (str) => str.trim();
const toLowerCase = (str) => str.toLowerCase();
const wrapInBrackets = (str) => `<${str}>`;

const result = wrapInBrackets(toLowerCase(trim("  Hello World  ")));
console.log(result); // <hello world>

// Compose utility: Right-to-left function composition
const compose =
  (...fns) =>
  (x) =>
    fns.reduceRight((acc, fn) => fn(acc), x);

// Create a composed function
const transform = compose(wrapInBrackets, toLowerCase, trim);

console.log(transform("  Hello World  ")); // <hello world>
```

## High-Order Functions

In JavaScript, a High-Order Function (HOF) is a function that either:

- Takes one or more functions as arguments, or
- Returns a function as its result

This is possible because functions in JavaScript are first-class citizens, meaning they can be stored in variables, passed as arguments, and returned like any other value.

-Examples:

```javascript
const casualGreet = (name) => `Hey ${name}!`;
const formalGreet = (name) => `Good evening, ${name}.`;
//High-order-function
function greetUser(greetFunction, name) {
  return greetFunction(name);
}
// Use different greeting styles
console.log(greetUser(casualGreet, "Alice")); // Hey Alice!
console.log(greetUser(formalGreet, "Bob")); // Good evening, Bob.

//JavaScript’s built-in array methods like map, filter, and reduce are also high-order functions:
const numbers = [1, 2, 3, 4];

const doubled = numbers.map((n) => n * 2);
console.log(doubled); // [2, 4, 6, 8]
```

## Recursion

Recursion is a programming technique where a function calls itself in order to solve a problem.

Every recursive function needs:

- A base case – the condition under which the recursion stops.
- A recursive case – the function calls itself with a different (usually smaller or simpler) input.

### Simple Analogy

- Think of recursion like Russian nesting dolls: each doll contains a smaller one inside, until you reach the smallest one (the base case).

Examples:

```javascript
function factorial(n) {
  if (n === 0) return 1; // base case
  return n * factorial(n - 1); // recursive case
}

console.log(factorial(5)); // 120

// factorial(5)
// = 5 * factorial(4)
// = 5 * 4 * factorial(3)
// = 5 * 4 * 3 * factorial(2)
// = 5 * 4 * 3 * 2 * factorial(1)
// = 5 * 4 * 3 * 2 * 1 * factorial(0)
// = 5 * 4 * 3 * 2 * 1 * 1
// = 120
```

### Why Use Recursion?

- Useful for problems that can be broken down into similar subproblems
- Especially helpful in tree, graph, and nested structure
- Can lead to elegant and concise solutions
