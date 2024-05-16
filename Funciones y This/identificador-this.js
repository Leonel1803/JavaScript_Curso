//Enlace implicito - Implicit binding
const house = {
    dogName: 'Fido',
    dogGreeting: function(){
        console.log(`Hi, I'm ${this.dogName}`)
    }
}

house.dogGreeting()


//Enlace Explicito - Explicit binding
function dogGreeting() {
    console.log(`Hi, I'm ${this.dogName}`) //No funcionara si no está vinculado, ya que debe de estar en un objeto patra usar el this
}

const house2 = {
    dogName: 'Coco',
    dogAge: 5
}

//dogGreeting() No vinculado

dogGreeting.call(house2) //Ahora se vincula con el objeto house2


//Enlace explicito y parámetros separados
function newDogGreeting(owner, address) {
    console.log(`Hi, I'm ${this.dogName} and I live with ${owner} on ${address}`) //No funcionara si no está vinculado, ya que debe de estar en un objeto patra usar el this
}

const house3 = {
    dogName: 'Firulais',
    dogAge: 5
}

const owner = 'Manuel'
const address = 'Avenue 123'

newDogGreeting.call(house3, owner, address) //Se vinculka con el objeto house3 y le mandamos dos parámetros
