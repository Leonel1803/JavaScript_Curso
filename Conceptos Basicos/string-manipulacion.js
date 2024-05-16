//String primitivos
//typeof extrae el tipo de dato de la variable
const stringPrimitivo='Soy un string primitivo'
console.log(typeof stringPrimitivo)

const stringPrimitivoTambien=String('Soy un string primitivo tambiÃ©n')
console.log(typeof stringPrimitivoTambien)

//String objeto
const stringObjeto=new String('Soy un string objeto')
console.log(typeof stringObjeto)

//Acceder a caracteres
const saludo = 'Hola. ¿Cómo estás?'
console.log(saludo[2])
console.log(saludo.charAt(2))
console.log(saludo.indexOf('o')) //Saca el indice de la primera 'o' de la cadena
console.log(saludo.indexOf('Cómo')) //Da el indice de origen de la palabra
console.log(saludo.indexOf('como')) //Si no existe da -1
console.log(saludo.lastIndexOf('o')) //Saca el indice de la última 'o' de la cadena
console.log(saludo.slice(3, 5)) //Corta la cadena de acuerdo a los indices
console.log(saludo.lenght) //Saca la longitud de la cadena
console.log(saludo.toLocaleUpperCase()) //Convierte todo a mayúscula
console.log(saludo.toLocaleLowerCase()) //Convierte todo a minúscula

const saludoDivido = saludo.split(' ') //Divide la cadena en arrays tomando como criterio el caracter puesto como parámetro
console.log(saludoDivido)
console.log(saludoDivido[1]) //El contenido del primer indice de la cadena dividida

const saludoConEspacios = ' Hola Mundo '
const saludoSinEspacios = saludoConEspacios.trim() //Quita los espacios de los extremos de la cadena
console.log(saludoSinEspacios)

const saludoOriginal = 'Hola Mundo'
const nuevoSaludo = saludoOriginal.replace('Mundo', 'Amigos') //Reemplazamos el primer parámetro por el segundo de nuestra cadena
console.log(nuevoSaludo)