// slice() Crea una copia superficial de una porción del array, especificada por indices de inicio y fin o solo inicio

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant']

console.log(animals.slice(2))
console.log(animals.slice(2, 4))
console.log(animals.slice(1, 6))
console.log(animals.slice(-2))
console.log(animals.slice(2, -1))
console.log(animals.slice())

//Los indices negativo significa recorre el array desde la deracha a la izquierda