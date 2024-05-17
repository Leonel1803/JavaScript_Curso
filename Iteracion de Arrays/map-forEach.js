//Iteran sobre un array
//No modifican el array original, sino que hacen una copia de él (Inmutabilidad)


// map() Aplica una función a cada uno de los elementos del array y devuleve el array con los lementos modificados. No altera el array original

const numbers = [1, 2, 3, 4, 5]
const squaredNumbers = numbers.map(num => num * num) //Devuelve un array que mutiplica cada uno de los elementos del array original por sí mismo 

console.log(numbers)
console.log(squaredNumbers)

// forEach() Iterar sobre cada uno de los elementos y ejecuta una función asignada. Cada elemento se usa como una variable dentro de la función del forEach

const colors = ['red', 'pink', 'blue']
const iteratedColors = colors.forEach(color => console.log(color)) //Por cada elemento el cual se nombrara por cada iteración "color" se hará un console.log

console.log(colors)
console.log(iteratedColors)// Es undefined debido a que forEach no devuleve nada


// Exercise: Fahrenheit to Celsius conversion

const temperaturesInFahrenheit = [32, 68, 95, 104, 212]

const temperaturesInCelsius = temperaturesInFahrenheit.map(fahrenheit => (5/9) * (fahrenheit - 32))

console.log('Temperatures In Fahrenheit: ', temperaturesInFahrenheit)
console.log('Temperatures In Celsius: ', temperaturesInCelsius)

// Exercise: Sum of Elements in an Array

const newNumbers = [1, 2, 3, 4, 5]

let sum = 0

newNumbers.forEach(number => {
  sum += number
})

console.log('Array of Numbers: ', newNumbers)
console.log('Sum of Numbers: ', sum)