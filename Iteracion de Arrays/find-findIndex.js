//No modifican el array original, sino que hacen una copia de él (Inmutabilidad)

//find() Devuelve el primer elemento que cumpla con una condición dada por una función
const multipleOf5 = [5, 10, 15, 20]
const firstNumberGreaterThan10=multipleOf5.find(number => number > 10)
console.log(multipleOf5)
console.log(firstNumberGreaterThan10)

//findIndex()  Toma el array y devuleve el índice del primer número del array que obedezca a la condición dada por la función
const randomNumber=[6,14,27,56,40]
const indexNumber = randomNumber.findIndex(number => number > 50)
console.log(randomNumber)
console.log(indexNumber)


//Ejercicio
const winningParticipants=[ //Lista de objetos
    {id:1,name:'Jennifer',ticketNumber: '001'},
    {id:8,name:'Michael',ticketNumber: '008'},
    {id:15,name:'Emily',ticketNumber: '015'},
    {id:47,name:'Charlie',ticketNumber: '047'}
]

function findWinnerByName(name){
    const winner = winningParticipants.find(participants => participants.name === name)
    return winner ||'No winner found with that name.'
}

function findIndexWinnerByTicket(ticketNumber){
    const index = winningParticipants.findIndex(participants => participants.ticketNumber === ticketNumber)
    return index !== -1 ? index: 'No winner found with that ticket number.'
}

function displayWinnerInformation(winner){
    if(winner !== undefined && winner != null && winner !== 'No winner found with that name.'){
        console.log('Winner information: ', winner)
    }
    else{
        console.log('No winner found.')
    }
}

const winnerByName = findWinnerByName('Emily')
const indexWinnerByTicket = findIndexWinnerByTicket('008')
displayWinnerInformation(winnerByName)
console.log('Index of Winner by Ticket Number: ', indexWinnerByTicket)