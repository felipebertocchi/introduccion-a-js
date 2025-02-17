//Link original y créditos a https://github.com/CodeGuppyPrograms/CodingChallenges (contiene las respuestas).

/*
Estos desafíos de coding están enfocados para los principiantes, por lo tanto las soluciones fueron implementadas
usando  elementos de programación simples y clásicos.
*/

/*
//Desafío de programación #1: Imprimí los números del 1 al 10

 Resultado: 10 9 8 7 6 5 4 3 2 1

 Desafìo de programación  #2: Imprimí los números impares del 1 al 100

 1 3 5 ... 99

 for (let i = 1; i <= 10; i++) {
    console.log(i);
 }

//Desafío de programación #3: Imprimí la tabla de multiplicación del 7

 7x0 = 0
 7x1 = 7
 ...
 7x9 = 63

 for (let i = 1; i <= 10; i++) {
    var mult = 7 * i
    console.log(`7x${i} = ${mult}`)
}

//Desafío de programación #4: Imprimí todas las tablas de multiplicación del 1 al 9

 1x0 = 0
 ...
 1x9 = 9
 2x0 = 0
 ...
 2x9 = 18
 ...
 ...
 9x9 = 81

 for (let i = 1; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
        console.log(`${i}x${j} = ${i * j}`)
    }
    console.log("\n")
}

//Desafío de programación #5: Calcula el resultado de la suma de los numeros del 1 al 10 en un array.
 [1,2,3,4,5,6,7,8,9,10]

 1 + 2 + 3 + ... + 10 = ? //hacerlo con un array y un bucle

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let suma = 0;
for (let i = 0; i < array.length; i++) {
    suma += array[i]
}
console.log(suma);

//Desafío de programación #6: Calcula 10! (10 factorial)

 10 * 9 * 8 * ... * 1

 let fact = 1;
for (let i = 1; i <= 10; i++) {
    fact = fact*i
}
console.log(`El factorial de 10 es ${fact}`)

//Desafío de programación #7: Calcula la suma de todos los números impares mayores que 10 y menores que 30

let suma = 0;
for (let i = 11; i <= 30; i+=2) {
    suma += i;
}
console.log(`${suma}`)

//Desafío de programación #8: Crea una función que convierta de Celsius a Fahrenheit

T = Number(prompt('Ingrese la temperatura a convertir a Fahrenheit'))
function celsiusToFahrenheit(T) {
    var Fahr = (T*(9/5)+32);
    return Fahr
}
console.log(`${T}° Celsius son ${celsiusToFahrenheit(T)}° Fahrenheit`)

//Desafío de programación #9: Crea una función que convierta de Fahrenheit a Celsius

T = Number(prompt('Ingrese la temperatura a convertir a Celsius'))
function fahrenheitToCelsius(T) {
    var celsius = ((T-32)*5/9);
    return celsius
}
console.log(`${T}° Fahrenheit son ${fahrenheitToCelsius(T)}° Celsius`)

//Desafío de programación #10: Calcula la suma de todos los números en un array de números

array = [1, 3, 52, 34, 23];
let suma = 0;
for (i = 0; i < array.length; i++) {
    suma += array[i];
}
console.log(`La suma del array es ${suma}`);

//Desafío de programación #11: Calcula el promedio de todos los números en un array de números. (en una función)

const array = [1, 3, 52, 34, 23];
console.log(array)

function promedio(array) {
    let suma = 0;
    for (i = 0; i < array.length; i++) {
        suma += array[i];
    }
    return (suma / array.length);
}

console.log(`El promedio del array es ${promedio(array)}`)

//Desafío de programación #12: Crea una función que reciba un array de números y devuelva un array conteniendo solo los números positivos

let array = [1, -3, 52, -4, 23, 6];
console.log(array);

function positivos(array) {
    const arrayPositivos = [];
    for (i = 0; i < array.length; i++) {
        if (array[i] >= 0) {
            arrayPositivos.push(array[i]);
        }
    }
    return arrayPositivos
}

array = positivos(array);

console.log(array);

//Desafío de programación #13: Find the maximum number in an array of numbers

const array = [1, -3, 52, -4, 23, 6];
console.log(array);

function maximo(array) {
    let i = 0;
    let max = array[i];
    for (i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
    }
    }
    return max
}

console.log(maximo(array));

//Desafío de programación #14: Imprimir los primeros 10 dígitos de Fibonacci sin recursión

Fibonacci (lo buscan en google si no lo saben o no se acuerdan)
El resultado debería ser: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55

function fibonacci(n) {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib.push(fib[i - 2] + fib[i - 1])
    }
    return fib
}

console.log(fibonacci(10));

//Desafío de programación #15: Crear una función que encuentre el número n de Fibonacci usando recursión

function fibonacci(n) {
    if (n < 2) {
        return n
    }
    return fibonacci(n - 1) + fibonacci(n - 2)
}

//Desafío de programación #16: Create una función que dado un número retorne un Boolean (true/false) dependiendo si es primo o no.
Aclaración: Los números primos son aquellos que tienen exactamente 4 divisores enteros.
Ejemplo:
   1 NO es primo porque tiene 2 divisores enteros (1, -1)
   2 es primo porque sólo puede dividirse por (1,-1,2,-2)
   3 es primo porque sólo puede dividirse por (1,-1,3,-3)
   4 NO es primo porque se puede dividir por (1,-1,2,-2,4,-4)
   5 es primo porque sólo puede dividirse por (1,-1,5,-5)
   6 NO es primo porque se puede dividir por (1,-1,2,-2,3,-3,6,-6)
   ... y así

function esPrimo(n) {
    let a = [];
    for (let i = -n; i <= n; i++) {
        if (n % i === 0) {
            a.push(i)
        }
    }
    if (a.length === 4) {
        console.log(`El número ${n} es primo, es divisible por ${a}`)
    }
    else {
        console.log(`El número ${n} no es primo, es divisible por ${a}`)
    }
}

n = Number(prompt("ingrese un número"));
esPrimo(n);

//Desafío de programación #17: Calcular la suma de los dígitos positivos de un número entero positivo
Ejemplo:
   123 = 1 + 2 + 3 = 6
   2 = 2
   1234 = 1 + 2 + 3 + 4 = 10

function sumaDigitos(n) {
    let a = n.toString();
    for (let i = 0; i <= a.length; i++) {
        
    }
}

//Desafío de programación #18: Imprimir los primeros 100 números primos

//Desafío de programación #19: Crear una función que retorne un array con los primeros números "n-primos" mayores que un número particular definido "alComienzo"
Ejemplo:
  Quiero los primeros 4 números primos mayores que 5, el resultado debería ser: [7,11,13,17,19]

//Desafío de programación #20: Rotar un array hacia la izquierda una posición
Ejemplo:
  [9,1,2,3,4] debería quedar como [1,2,3,4,9]
  [5] debería quedar como [5]
  [4,3,2,1] debería quedar como [3,2,1,4]

//Desafío de programación #21: Rotar un array a la derecha una posición
Ejemplo:
  [2,3,4,1] debería quedar como [1,2,3,4]
  [2,3] debería quedar como [3,2]

//Desafío de programación #22: Invertir un array
Ejemplo:
  [1,2,3,4] debería quedar como [4,3,2,1]
  [6,5,4,3,2,1] debería quedar como [1,2,3,4,5,6]
  [5,6,3] debería quedar como [3,6,5]

//Desafío de programación #23: Invertir una cadena de caracteres
Ejemplo:
  "dabale arroz a la zorra el abad" debería quedar como "daba le arroz al a zorra elabad"
  "bienvenido" debería quedar como "odinevneib"

//Desafío de programación #24: Crear una función que reciba dos dos arrays (arreglos) como argumentos y returne el resultado en un nuevo arreglo
Ejemplo:
  [1,2,3] con ["a","b","c"] debería quedar como [1,2,3,"a","b","c"]


//Desafío de programación #25: Crear una función que reciba dos arrays (arreglos) de números como argumentos y retorne un array con números que estén en uno u otro array, pero NO en ambos.
Nota: Esto se llama "diferencia simétrica" entre conjuntos

//Desafío de programación #25: Crear una función que reciba dos arrays (arreglos) de números como argumentos y retorne un array con números que estén en uno u otro array, pero NO en ambos.
Ejemplo:
  [1,2,3] y [3,7,11] debería devolver [1,2,7,11]
  [5,10,3] y [10,1] debería quedar como [5,3,1]

//Desafío de programación #26: Crear una función que reciba dos arrays de números y retorne un nuevo array con los elementos que se encuentren en el primer array, pero no en el segundo
Nota; Esto se llama "resta" entre conjuntos
Ejemplo:
  [5,1,2,3,4] y [3,4] debería devolver [5,1,2]

//Desafío de programación #27: Crear una función que reciba un array de números como argumento y retorne un array con los elementos distintos
Ejemplo:
   [1,2,3,4,5,4,3,2,1,0] debería retornar [1,2,3,4,5,0]


==== FALTAN TRADUCIR
//Desafío de programación #28: Calculate the sum of first 100 prime numbers
//Desafío de programación #29: Print the distance between the first 100 prime numbers
//Desafío de programación #30-a: Create a function that will add two positive numbers of indefinite size. The numbers are received as strings and the result should be also provided as string.
//Desafío de programación #30-b: Create a function that will add two positive numbers of indefinite size. The numbers are received as strings and the result should be also provided as string.
//Desafío de programación #31-a. Create a function that will return the number of words in a text
//Desafío de programación #31-b. Create a function that will return the number of words in a text
//Desafío de programación #32. Create a function that will capitalize the first letter of each word in a text
//Desafío de programación #33. Calculate the sum of numbers received in a comma delimited string
//Desafío de programación #34. Create a function that will return an array with words inside a text
//Desafío de programación #35. Create a function to convert a CSV text to a “bi-dimensional” array
//Desafío de programación #36. Create a function that converts a string to an array of characters
//Desafío de programación #37. Create a function that will convert a string in an array containing the ASCII codes of each character
//Desafío de programación #38. Create a function that will convert an array containing ASCII codes in a string
//Desafío de programación #39. Implement the Caesar cypher
//Desafío de programación #40. Implement the bubble sort algorithm for an array of numbers
//Desafío de programación #41. Create a function to calculate the distance between two points defined by their x, y coordinates
//Desafío de programación #42. Create a function that will return a Boolean value indicating if two circles defined by center coordinates and radius are intersecting
//Desafío de programación 43. Create a function that will receive a bi-dimensional array as argument and a number and will extract as a unidimensional array the column specified by the number
//Desafío de programación #44. Create a function that will convert a string containing a binary number into a number
//Desafío de programación #45. Create a function to calculate the sum of all the numbers in a jagged array (array contains numbers or other arrays of numbers on an unlimited number of levels)
//Desafío de programación #46-a. Find the maximum number in a jagged array of numbers or array of numbers
//Desafío de programación #46-b. Find the maximum number in a jagged array of numbers or array of numbers
//Desafío de programación #47. Deep copy a jagged array with numbers or other arrays in a new array
//Desafío de programación #48. Create a function to return the longest word(s) in a string
//Desafío de programación #49. Shuffle an array of strings
//Desafío de programación #50. Create a function that will receive n as argument and return an array of n unique random numbers from 1 to n.
//Desafío de programación #51. Find the frequency of characters inside a string. Return the result as an array of objects. Each object has 2 fields: character and number of occurrences.
//Desafío de programación #52. Calculate Fibonacci(500) with high precision (all decimals)
//Desafío de programación #53. Calculate 70! with high precision (all decimals)
 */
