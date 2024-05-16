//Asignamos explicitamente
const isActive=true
const hasPermisson=false

//Asignamos de acuerdo al resultado que de nuestra condición (implicitamente)
const result=5>3
console.log(result)

//Verificación de valor
const name='Platzi'
console.log(!!name) //Verifica que la variable tien algún valor

//Conversión
const value=0
const otherValue=-24
const explicitBoolean=Boolean(otherValue) //Convertimos a bool. El 0 lo toma como falso y cualquier otro lo toma como true
console.log(explicitBoolean)