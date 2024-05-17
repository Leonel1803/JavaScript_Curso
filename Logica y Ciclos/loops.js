//FOR
// for (variable; condiciÃ³n; incremento) {
//   código a ejecutar
// }

let list = ["eat", "sleep", "code", "repeat"];

//Declaramos i es igual a cero y esta subirá su valor 
//de uno en uno, esto irá ejecutando sentencias 
//hasta que i sea mayor al tamaño de nuestra lista
for (let i = 0; i < list.length; i++) { 
  console.log(list[i]); //Recorre la lista debido a que i aumenta de valor
}


//FOR EACH
/*

array.forEach((item) => {
  cÃ³digo a ejectura
})

*/

let list2 = ["eat", "sleep", "code", "repeat"];

list2.forEach((item) => { //Recorremos toda nuestra lista y cada objeto en esa lista lo agarrara, lo nombrara x y hará algo con ese objeto 
  console.log(item);
});
//Por cada elemento de la lista


//FOR OF
/*

for of arrays, strings [algo]

for (varible of objeto) {
  código 
}

*/

let canasta = ["manzana", "pera", "naranja", "uva"];

for (fruta of canasta) { //Similar a forEach pero diferente sintaxis, (nueva_varaiable of lista). Puede utilizarse con cualquier objeto iterable, no solo con arrays.
  console.log(fruta);
}
//Por fruta de canasta

let string = 'Hello';
for (let character of string) {
    console.log(character);
}


//FOR IN
/*

for in ---> objetos 

propiedades = valor

array, string

item

for (varible in objeto) {
  cÃ³digo
}

*/

//For in sirve para iterar sobre objetos enumerables
//Itera los atributos del objeto
const listaDeCompras = {
    manzana: 5,
    pera: 3,
    naranja: 2,
    uva: 1,
};
  
for (fruta in listaDeCompras) {
    console.log(fruta); //Leemos los atributos
}
  
for (fruta in listaDeCompras) { //El nombre de los atributos será el indice
    console.log(`${fruta} : ${listaDeCompras[fruta]}`); //Leemos los atributos y los valores de los atributos
}
  
// for (fruta of listaDeCompras) { //FOR OF no deja hacer lo mismo, ya que no itera sobre atributos, solo sobre listas
//     console.log(fruta);
// }


//WHILE
let contador = 0;
while (contador < 10){ //Se corrrera la contenido en el while, siempre y cuando su condición sea verdadera
    console.log(contador);
    contador++;
}


//DO WHILE
/*
do {
    cÃģdigo
  } while (condicion)
  
*/
  
let contador2 = 0;
  
do {
    console.log(contador2);
    contador++;
} while (contador < 10); //En do while primero se ejecuta el código y luego evalúa la condición, si cumple la condición repite el ciclo