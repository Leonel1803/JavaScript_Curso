// Methods that DO NOT modify the original array (Immutability).

const ages = [21, 25, 30, 19, 22]

// every() Determina si todos los elementos del array satisfacen la condición

const allAreAdults = ages.every(age => age > 20)

console.log(ages)
console.log(allAreAdults)

// some() Determina si alguno de los elementos del array satisfacen la condición

const atLeastOneIsOver30 = ages.some(age => age > 30)

console.log(ages)
console.log(atLeastOneIsOver30)