const numeroSecreto=Math.floor(Math.random()*10+1); //Numero random entre 1 y 10
const numeroJugador=parseInt(prompt("Adivina el nÃºmero secreto entre el 1 al 10")); //El usuario asigna un número
console.log(`Este es el nÃºmero con el que juegas ${numeroJugador}`);

if(numeroJugador===numeroSecreto){
    console.log("¡Felicidades, adivinaste el número secreto!");
}
else if(numeroJugador<numeroSecreto){
    console.log("El número es demasiado bajo, intenta de nuevo");
}
else{
    console.log("El número es muy alto, intenta de nuevo");
}