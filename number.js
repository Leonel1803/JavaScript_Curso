//Tipo entero y decimal
const entero=42
const decimal=3.14
console.log(typeof entero,typeof decimal) //Ambos son number

//Notación científica
const cientifico=5e3

//Infinitos y Not a Number (Nan)
const infinito=Infinity
const noEsUnNumero=NaN


//Operaciones
const suma=3+4
const resta=4-4
const mutiplicacion=4*7
const division=16/2
const modulo=15%8 //Nos dará el residuo de una división (Módulo)
const exponenciacion=2**3
const resultado=0.1+0.2
console.log(resultado)
console.log(resultado.toFixed(1)) //Redondea al decimal indicado
console.log(resultado===0.3) //Dará error ya que le falta el toFixed (JS tiene errores de calculo al usar decimales)

//Operaciones avanzadas
const raizCuadrada=Math.sqrt(16) //Raíz cuadrada
const valorAbsoluto=Math.abs(-7) //Valor absoluto
const aleatorio=Math.random() //Número random
console.log(raizCuadrada)
console.log(valorAbsoluto)
console.log(aleatorio)