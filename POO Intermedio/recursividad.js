// function recursiva() { //Función recursiva básica
//   if (/* validacion */) {
//     // llamados recursivos
//   } else {
//     // llamados normales, sin recursividad
//   }
// }

const numeritos = [0,1,2,3,4,5,5,6,7,8,9,435678,7,2,3];

// let numerito = 0;
// for (let index = 0; index < numeritos.length; index++) {
//   numerito = numeritos[index];
//   console.log({ index, numerito });
// }

function recursiva(numbersArray) { //Va quitando los número del principio hasta que la lista quede vacía
  if (numbersArray.length != 0) { //Cuando ya se hayan quitado todos los núnmeros, entonces la función ya parará
    const firstNum = numbersArray[0];
    console.log(firstNum);

    numbersArray.shift();
    recursiva(numbersArray); //Pasa la lista con un elemento menos al principio
  }
}