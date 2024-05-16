// Tipo primitivo - Inmutable
let numero = 23;
numero = numero + 10;
console.log(numero);

let esVerdadero = true;
esVerdadero = false;
console.log(esVerdadero);

//Tipo complejo - Mutable
let usuario = { nombre: 'Pepito', edad: 15 };
usuario.edad = 20
console.log(usuario)

let frutas = ['manzana', 'pera']
frutas[0] = 'sandia'
console.log(frutas);

//Mutable (hace pase por referencia)
function cambiarNombre (objeto){
    objeto.nombre = 'Nuevo nombre';
}

//Inmutable (hace pase por parámetro)
function cambiarNumero (numero){
    numero = 13;
}

let persona = {nombre: 'Antonio'};
cambiarNombre(persona);

console.log(persona);

let edad = 16;
cambiarNumero(edad);

console.log(edad);