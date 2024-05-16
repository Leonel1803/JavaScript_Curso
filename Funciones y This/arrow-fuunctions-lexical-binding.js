//Funcion normal
const greeting = function (name){
    return `Hi ${name}`
}


//Arrow function - Funcion de flecha
//Implicit return
const newGreeting = name =>{
    return `Hi ${name}`
}

const newGreetingTwoParameters = (name, lastName) =>{
    return `Hi ${name} ${lastName}`
}


//Lexical binding
const fictionalCharacter = {
    name: 'Uncle Ben',
    messageWithTraditionalFunction: function(message) {
        console.log(`${this.name} says ${message}`)
    },
    messageWithArrowFunction: (message) => { //Esto dará error por ser arrow function, ya que esto pasa en las arrow functions dentro de los objetos
        console.log(`${this.name} says ${message}`)
    }
}
fictionalCharacter.messageWithTraditionalFunction('With great power comes great responsability.')
fictionalCharacter.messageWithArrowFunction('Beware of Doctor Octopus.')