//Funciones puras
function sum(a, b){
    return a + b
}

function square(x) {
    return x * x
}

function addTen(y) {
    return y + 10
}

//Side effects (si una se cumple, nuestra función deja de ser pura)
//1. Modificar variables globales
//2. Modificar parámetros
//3. Solicitudes HTTP
//4. Impresiones en la consola
//5. Manipulación del DOM
//6. Obtener hora actual (info del sistema)

//Funciones impuras
function sum(a, b){
    console.log(`A: ${a}`) //4.
    return a + b
}

let total = 0

function sumWithSideEffect() {
    total += 5 //1. 
    return total
}

const number = 5
const finalResult = addTen(square(number)) //Sigue siendo función pura
console.log(finalResult)