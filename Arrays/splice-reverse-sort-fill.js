// Methods that modify the original array (Mutability).

//splice() Cambia el contenido de un array eliminando elementos existentes (devuleve el eliminado de mayor posición) y/o agregando elementos nuevos al final del array

const vegetables = ['carrot', 'broccoli', 'spinach', 'tomato']
const removedVegetables = vegetables.splice(2, 1, 'cucumber', 'onion') //Especificamos que solo debe quitar 1 elemento y debe empezar desde el indice 2 y luego agrega cucumber y onion

console.log(vegetables)
console.log(removedVegetables)

// reverse() Organiza el array a la inversa

const numbers = [1, 2, 3, 4, 5]
const reversedNumbers = numbers.reverse()

console.log(numbers)
console.log(reversedNumbers)

// sort() with number. Ordena el array de numeros covirtiendolos en string y ordenandolos del unicode menor al mayor, también se pueden ordenar por funciones hechas por nosotros

const unsortedNumbers1 = [4, 18, 1, 62, 34]
const unicodeSortedNumbers = unsortedNumbers1.sort()

console.log(unsortedNumbers1)
console.log(unicodeSortedNumbers)

const unsortedNumbers2 = [4, 18, 1, 62, 34]
const sortedNumbers = unsortedNumbers2.sort((a, b) => a - b) //Ordena del menro al mayor. a valor de izquierda, b valor de la derecha
//4 - 18 = -14 da resultado negativo, por lo tanto interpreta que 4 es menor que 18, por lo tanto lo deja así
//18 - 1 = 17da resultado positivo, por lo tanto interpreta que 18 es mayor que 1, por lo tanto cambian de posición

console.log(unsortedNumbers2)
console.log(sortedNumbers)

// sort() with strings. Ordena a UTF-16 (alfabeticamente) 

const cities = ['New York', 'Paris', 'Tokyo', 'London']
const sortedCities = cities.sort()

console.log(cities)
console.log(sortedCities)

// fill() Cambia todos los elementos de un array por un array de valor estático. Cambia todos los x valores del array por algo en particular

const ages = [21, 35, 45, 50]
console.log(ages.fill(0, 2, 4)) //Llena con el valor 0 desde la posicion 2 a 4 del array
console.log(ages.fill(15, 1)) //Llena con el valor 15 desde la posición 1 del array
console.log(ages.fill(15)) //Llena todo el array con el valor 15