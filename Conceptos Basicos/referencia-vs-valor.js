//Valor, se hace copia de los valores asignados
let x=1
let y='Hola'
let z=null
let a=x
let b=y
let c=z
console.log(x,y,z,a,b,c)

// Sus variables antes asignadas no cambian de valor debido a que su valor fue asignado por una copia, no por la variable per se
a=12
b='Platzi'
c=undefined

//Referencia, se hace llamada entre objetos asignados
let frutas=['manzana']
frutas.push('pera')
console.log(frutas)
let panes=['ðŸ¥']
let copiaDePanes=panes
panes.push('ðŸ¥–')
console.log(panes,copiaDePanes) //Ambos arreglos tendrán lo mismo debido a que ambos arrays son el mimso (tienen la misma dirección de memeoria)