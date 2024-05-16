//IF
let nombre = 'Beder';

// Comprueba si el valor de nombre es estrictamente igual a 'Beder'.
if (nombre === 'Beder') {
    // Imprime en la consola un mensaje de bienvenida específico para 'Beder'.
    console.log('Bienvenido Beder');
} 
// Si la condición anterior es falsa, verifica si el valor de nombre es estrictamente igual a 'Juan'.
else if (nombre === 'Juan') {
    // Imprime en la consola un mensaje de bienvenida específico para 'Juan'.
    console.log('Bienvenido Juan');
} 
// Si ninguna de las condiciones anteriores es verdadera, ejecuta este bloque de código.
else {
    // Imprime en la consola un mensaje indicando que el usuario es desconocido.
    console.log('Usuario desconocido');
}


//TERNARIOS
let edad = 15;
let tipoDePersona = edad >= 18 ? "adulto" : "niño"; // Si edad es igual o mayor a 18, entonces es un adulto, si no es el caso entonces es un niño
console.log(tipoDePersona); // Imprime: "niño"


//SWITCH
let expr="Uvas";

//Switch es comparación ===
switch(expr){ //Evalua los casos de acuerdo al valor de nuestra variable. Si cumple un caso entonces se ejecuta ese caso, si no se cumple ninguno entonces se va al default
    case "Naranjas":
        console.log("Las naranjas cuestan $20 el kilo");
        break;
    case "Manzanas":
        console.log("Las manzanas cuestan $43 el kilo");
        break;
    case "Plátanos":
        console.log("El plátano esta en $30 el kilo");
        break;
    case "Mangos": //Si no hay nada en este case, se interpreta que si este o el/los que están debajo de el se cumplen, entonces se ejecutara la linea de código asignada al último. En este caso la de "Papaya"
    case "Papayas":
        console.log("Los mangos y las papayas cuestan $ 25 pesos el kilo");
        break;
    default:console.log(`Lo siento, no contamos con ${expr}`);
}

console.log("Â¿Hay algo mÃ¡s que desees?");

function realizarTarea(dia) {
    switch (dia) {
        // Si 'dia' es igual a cualquiera de estos casos ('lunes', 'martes', 'miércoles', 'jueves', 'viernes')
        case 'lunes':
        case 'martes':
        case 'miércoles':
        case 'jueves':
        case 'viernes':
            // Imprime en la consola que es un día laboral y se están realizando tareas laborales
            console.log('Es un día laboral. Realizando tareas laborales.');
            // Sale del bloque switch
            break;

        // Si 'dia' es igual a 'sábado' o 'domingo'
        case 'sábado':
        case 'domingo':
            // Imprime en la consola que es fin de semana y se está disfrutando del tiempo libre
            console.log('Es fin de semana. Disfrutando del tiempo libre.');
            // Sale del bloque switch
            break;

        // Si 'dia' no coincide con ninguno de los casos anteriores
        default:
            // Imprime en la consola que el día no es reconocido y sugiere verificar la entrada
            console.log('Día no reconocido. Verifica la entrada.');
    }
}

// Ejemplos de uso de la función realizarTarea con diferentes días como argumentos
realizarTarea('lunes');     // Día laboral
realizarTarea('sábado');    // Fin de semana
realizarTarea('domingo');   // Fin de semana
realizarTarea('miércoles'); // Día laboral
realizarTarea('julio');     // Día no reconocido