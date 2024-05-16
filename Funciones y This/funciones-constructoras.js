const personalizedMessage = () => {return 'Goodbye everybody !'}

function Rocket(name, message) { //Las constructoras deben iniciar con mayúscula
    this.name = name
    this.message = message

    this.launchMessage = function(){
        console.log('*se va')
    }
} //Esto en sí ya es una clase con la cual se pueden hacer instancias de objetos

const falcon9Rocket = new Rocket('Falcon 9', personalizedMessage) //Objeto - instancia de Rocket
const falconHeavyRocket = new Rocket('Falcon Heavy', 'See you soon')
console.log(falcon9Rocket.name)
console.log(falcon9Rocket.message)

console.log(falconHeavyRocket.name)
console.log(falconHeavyRocket.message)
console.log(falconHeavyRocket.launchMessage())


//Con arrow function
const RocketWithArrowFunction=(name, message, ownMessage)=>({name:name, message: message, launchMessage:ownMessage}) //Se sobrescriben métodos
const personalizedMessageForArrowFunction=()=>'Successful launch !'
const falcon9Rocket1=RocketWithArrowFunction('Falcon 9', 'Adios', personalizedMessageForArrowFunction) //Se sobrescriben métodos
console.group(falcon9Rocket1.name)
console.group(falcon9Rocket1.message)
console.group(falcon9Rocket1.launchMessage())