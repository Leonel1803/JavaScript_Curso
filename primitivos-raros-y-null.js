//Null
const snoopy=null
console.log(snoopy)
console.log(typeof snoopy) //Lo toma como objeto pero al final del día sigue siendo primitivo

//Undefined
let name
console.log(name) //No tiene todavía asignación pero está declarado

//Symbol
//Sirve para escribir valores únicos y que no cambien
const uniqueId=Symbol('id')
const symbol1=Symbol(1)
const symbol2=Symbol(1)
//No puede haber Symbol's iguales
console.log(symbol1===symbol2)
const ID=Symbol('id')
let user={}
user[ID]='1234'
console.log(user)

//Bigint - Números grandes
const bigNumber=109823746783982764567847654782374n
console.log(bigNumber)
const numberOfParticlesInTheUniverse=10000000000000000000n
console.log(numberOfParticlesInTheUniverse)