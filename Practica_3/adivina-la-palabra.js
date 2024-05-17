/*
Let's play the game "Guess the secret word."

The user has 3 tries to guess the word.

Requirements:

- The game must have a secret word.
- The game could give a clue of what the word is.
- The user must enter a supposition.
- The game must check is the user's supposition is correct.
- The game must have a limit number of tries.
- The game must end when the user guess the correct word or he runs out of tries.

*/

const palabraAdivinar = 'Paraplejico'
let acertado = false

for(let i = 0;i < 3;i++){
    let palabra = prompt("Adivina la palabra: ")

    if(palabra != null && palabra != undefined && palabra != ''){
        for(let i = 0;i < palabra.length;i++){
            if(palabra == palabraAdivinar){
                acertado = true;
            }
            else if(palabra[i].toLowerCase() == palabraAdivinar[i].toLowerCase()){
                console.log(`La letra ${palabra[i]} en la posición ${i + 1} es correcta`)
            }
        }
    }
    else{
        console.log("Vamos! Ingresa algo")
    }

    if(acertado){
        console.log("Has ganado!")
        i = 3
    }
}

if(!acertado){
    console.log("Has perdido")
}