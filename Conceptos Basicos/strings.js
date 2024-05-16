//Creación strings
const primeraOpcion='Comillas simples'
const segundaOpcion="Comillas simples"
const terceraOpcion=`Comillas simples` //Alt + 96 = `

//Concatenación
//Opción 1
const direccion='Calle falsa 123'
const ciudad='Springfield'
const direccionCompleta='Mi direcciÃ³n completa es '+direccion+ciudad
console.log(direccionCompleta)

//Opción 1 (con espacio)
const direccionCompletaConEspacio='Mi direcciÃ³n completa es '+direccion+' '+ciudad
console.log(direccionCompletaConEspacio)

//Opción 2
const nombre='Estefany'
const pais='ðŸ‡¨ðŸ‡´'
const presentacion=`Hola, soy ${nombre} de ${pais}` //Interpolación
console.log(presentacion)

//Ocpión 3
const primeraParte='Me encanta'
const segundaParte='la gente de'
const terceraParte='ðŸ‡²ðŸ‡½'
const pensamiento=[primeraParte,segundaParte,terceraParte]
console.log(pensamiento.join(' ðŸŒ¯ ')) //Pone el parámetro del join entre cada cadena del array

//Opción 4
const hobbie1='correr'
const hobbie2='leer'
const hobbie3='estudiar'
const hobbies='Mis hobbies son: '.concat(hobbie1,', ',hobbie2,', ',hobbie3,'.') //Se concatenan con la función .concat y solo separamos por comillas cada cadena
console.log(hobbies)

//Caracteres de escape
//Escape alternativo
const escapeAlternativo="I'm Software Engineer"

//Barra invertida
const escapeBarraInvertida='I\'m Software Engineer'

//Template literals
const escapeComillaInvertida=`I'm Software Engineer`

//Saltos de linea
//Opción 1
const poema='\nLas rosas son rojas,\n'+
'Las violetas son azules,\n'+
'Caracter inesperado,\n'+
'En la lÃ­nea 86.'
console.log(poema)

//Opción 2
const poema2='\nLas rosas son rojas,\n\
Las violetas son azules,\n\
Caracter inesperado,\n\
En la lÃ­nea 86.'
console.log(poema2)

//Opción 3
const poema3=`
Las rosas son rojas,
Las violetas son azules,
Caracter inesperado,
En la lÃ­nea 86.`
console.log(poema3)