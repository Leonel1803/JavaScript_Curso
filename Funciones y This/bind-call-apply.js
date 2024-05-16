// Enlace explicito normal
const owner = 'Lucy'
const address = '123 Avenue'

function dogGreeting(owner, address) {
    console.log(`Hi, I'm ${this.dogName} and I live with ${owner} on ${address}`)
}

const newHouse = {
    dogName: 'Coconut'
}

dogGreeting.call(newHouse, owner, address)


//Enlace explicito con apply
const necessaryValues = [owner, address]
dogGreeting.apply(newHouse, necessaryValues) //Ejecuta la función y sus parámetros los agarra de un arreglo


//Enlace explicito con bind
const bindingWithBind = dogGreeting.bind(newHouse, owner, address) //Esto devuelve otra funcion
bindingWithBind()