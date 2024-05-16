// Social Media Profile

// Información
const username = 'Leonel1803'
const fullname = 'León Rivera'
const age = 25
const isStudent = true

// Direccion
const address = {
    street: 'Av. Río Altea',
    city: 'Guadalajara',
    state: 'Jalisco',
    zipCode: 45645
}

// Hobbies
const hobbies = ['Coding', 'Reading', 'Playing', 'Gaming']

// Biografía
const biografía = `Hola soy ${username}, tengo ${age} años de edad.
Vivo en ${address.city}, ${address.state} en la calle ${address.street}
C.P ${address.zipCode}. Me gusta ${hobbies.join(', ')}.
Aparte ${isStudent ? 'soy un estudiante' : 'estoy trabajando en una empresa'}`

console.log(biografía)