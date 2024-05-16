// && (AND): Devuelve true si ambos operandos son verdaderos.
// || (OR): Devuelve true si al menos uno de los operandos es verdadero.
// ! (NOT): Devuelve true si el operando es falso y false si el operando es verdadero.

//Ejemplo 1
let a = true;
let b = false;

console.log(a && b); // Imprime: false
console.log(a || b); // Imprime: true
console.log(!a);     // Imprime: false
console.log(!b);     // Imprime: true

//Ejemplo 2
// const a = 10;
// const b = 20;
// const c = "10";

// a == b && a === c;
// a != b || a === c;
// !(a === c);