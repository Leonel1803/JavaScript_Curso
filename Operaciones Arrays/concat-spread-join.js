// Methods that DO NOT modify the original array (Immutability).

const morseCode1 = ['....', '---'] // H O
const morseCode2 = ['.-..', '.-'] // L A

//concat() une dos o más arays Forma 1

const morseCodeMessage = morseCode1.concat(morseCode2) //Al morseCode1 le concatenamos morseCode2

console.log(morseCode1)
console.log(morseCode2)
console.log(morseCodeMessage)

//concat() Forma 2

const morseCodeMessage2 = [].concat(morseCode1, morseCode2) //A un array vacío le concatenamos morseCode1 y morseCode2

console.log(morseCode1)
console.log(morseCode2)
console.log(morseCodeMessage)

//Spread Operator (...)

function combineMorseMessages (morseCode1, morseCode2) {
  console.log([...morseCode1, ...morseCode2]) //Los tres puntos representan el array en totalidad
}

combineMorseMessages(morseCode1, morseCode2)

const numbers = [1, 2, 3]
const string = 'string'

combineMorseMessages(numbers, string)

// join() Concatena todos lo elementos de un array en una cadena de texto, separados por un delimitador especificado por el parámetro del método

const morseCodeMessageString = morseCodeMessage.join('')

console.log(morseCode1)
console.log(morseCode2)
console.log(morseCodeMessageString)