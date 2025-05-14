<!--
JavaScript is a multi-paradigm language, meaning it supports object-oriented, imperative, and functional programming.


What is functional programming (FP)?
Functional programming is a paradigm that treats computation as the evaluation of mathematical functions and avoids changing state or mutable data. Key principles include:
Pure functions


Immutability


Function composition


Higher-order functions


Avoiding side effects
What is a side effect?
A side effect is any interaction of a function with the outside world or modification of something beyond its scope. Examples include:
Modifying external variables


Writing to the console (console.log)


Modifying the DOM


Making HTTP requests


Reading/writing files or data


Mutating existing objects or arrays
Pure functions
A pure function follows two rules:
It always returns the same output for the same input.


It causes no side effects.
 Higher-Order Functions
A higher-order function is a function that does at least one of the following:
Takes another function as an argument.


Returns a function.

Recursion
Unlike object-oriented programming, functional programming doesn’t make use of “while” or ”for” loops or “if-else” statements. Functional programs avoid constructions that create different outputs on every execution. Instead, recursive functions call themselves repeatedly until they reach the desired state or solution known as the base case.

Composición de funciones
La composición de funciones es el proceso de combinar dos o más funciones, teniendo como finalidad ejecutar cada una de estas funciones en secuencia para obtener un resultado en concreto.
> f(x)
> g(x)

> f(g(x))

En este caso combinamos la función f de x con la función g de x.


¡Claro! La composición de funciones es un concepto fundamental en programación funcional. Vamos a verlo paso a paso, con ejemplos claros para que se entienda bien.

🔄 ¿Qué es la composición de funciones?
🧪 Ejemplo simple en JavaScript
Supongamos que tienes estas funciones:
javascript
CopiarEditar
const duplicar = x => x * 2;
const sumarTres = x => x + 3;


Si quieres aplicar ambas funciones a un número, puedes hacerlo así:
javascript
CopiarEditar
const resultado = duplicar(sumarTres(5)); // (5 + 3) * 2 = 16
Esta es composición manual: duplicar(sumarTres(x)).


Ejercicio
Crea una función llamada customFilter que acepte dos argumentos:
Un array de números.


Una función de callback que determine si un elemento debe incluirse o no.


La función customFilter debe devolver un nuevo array con los elementos que pasen la condición del callback.

Ejemplo de uso:
const numbers = [1, 2, 3, 4, 5, 6];

const evenNumbers = customFilter(numbers, function(n) {
  return n % 2 === 0;
});

console.log(evenNumbers); // [2, 4, 6]

Solution:
function customFilter(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      result.push(array[i]);
    }
  }
  return result;
}

// Ejemplo de uso:
const numbers = [1, 2, 3, 4, 5, 6];

const evenNumbers = customFilter(numbers, function(n) {
  return n % 2 === 0;
});

console.log(evenNumbers); // [2, 4, 6]


 -->
