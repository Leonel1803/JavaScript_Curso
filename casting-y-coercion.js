//Conversión Explicita
const string = '42'
const integer = parseInt(string) //Convertimos explicitamente a number
console.log(integer)
console.log(typeof integer)

const stringDecimal = '3.1416'
const float = parseFloat(stringDecimal)
console.log(float)
console.log(typeof float)

const binary = '1010'
const decimal = parseInt(binary, 2) //Convertimos de binario a decimal
console.log(decimal)
console.log(typeof decimal)

//Conversión Implicita
const sum = '5' + 3 //Convierte el number a string y lo concatena
console.log(sum)

const sumWithBoolean = '3' + true //Convierte el boolean a string y lo concatena
console.log(sumWithBoolean)

const sumWithNumber = 2 + true //Convierte boolean a number y lo suma
console.log(sumWithNumber)

console.log('--')
const stringValue = '10'
const numberValue = 10
const booleanValue = true
console.log(stringValue + stringValue) //Concatena
console.log(stringValue + numberValue) //Convierte number a string y concatena
console.log(stringValue + booleanValue) //Convierte el boolean a string y concatena
console.log(numberValue + stringValue) //Convierte number a string y concatena
console.log(numberValue + numberValue) //Suma
console.log(numberValue + booleanValue) //Convierte bool a number y suma
console.log(booleanValue + stringValue) //Convierte el boolean a string y concatena
console.log(booleanValue + numberValue) //Convierte bool a number y suma
console.log(booleanValue + booleanValue) //Convierte los boolean a number y los suma
