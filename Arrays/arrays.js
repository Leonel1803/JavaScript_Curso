// Crear arrays

// new Array o Array()
const fruits = Array('manzana', 'platano', 'naranja')
const fruits2 = new Array('manzana', 'platano', 'naranja')

console.log(fruits)
console.log(fruits2)

const emptyArray = Array(12) //Creamos un array con 12 espacios vacíos
console.log(emptyArray)

const numbers = Array(1, 2, 3, 4 ,5)
console.log(numbers)

// 2. Array literal syntax

const oneNumber = [4] //Un array con un solo valor
console.log(oneNumber)

const emptyArray2 = [] //Vacío
console.log(emptyArray2)

const sports = ['soccer', 'tennis', 'rugby']
console.log(sports)

const recipeIngredients = [  //Array de distintos tipos de datos (array mixto)
  'Flour',
  true,
  2,
  {
    ingredient: 'Milk', quantity: '1 cup'
  },
  false
]
console.log(recipeIngredients)

// Accessing array elements

const firstFruit = fruits[0] //Accedemos al indice 0 de nuestro array
console.log(firstFruit)

// length property

const numberOfFruits = fruits.length
console.log(numberOfFruits)


// Mutability

fruits.push('watermelon') //Agregamos el elemento a la última posición de nuestro array
console.log(fruits)

// Immutability

const newFruits = fruits.concat(['grape', 'kiwi']) //Nuestro newFruit (array2) copia los mismos elementos que fruit (array1) pero con nuevos elementos especificados en el parámetro de concat
console.log(fruits)
console.log(newFruits)

// Checking arrays with Array.isArray()

const isArray = Array.isArray(fruits) //Verifica si un array es array. Devuelve true o false
console.log(isArray)


// Practical exercise: sum all elements of an array.

const numbersArray = [1, 2, 3, 4, 5]
let sum = 0

for (let i = 0; i < numbersArray.length; i++) {
  sum += numbersArray[i]
}

console.log(sum)