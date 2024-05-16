// Funciones como argumentos
function a(){}
function b(a){} 
b(a) //Lo que retorna una función, es el argumento de otra función


//Retornan funciones
function a(){ //Esta función  ejecuta una función que está dentro de ella y devuelve el valor de esa función
    function b() {}
    return b
}


//Asignar funciones a variables
const a = function() {} //Si llamas la variable a, significa que llamas a su función contenida en ella


//Tener propiedades y métodos
function a(){}
const obj={}
a.call(obj) //La función toma a nuestro objeto (clase) como contexto de ejecución - Toma al objeto como si se ejecutara dentro de él


//Anidar funciones -> Nested functions
function a(){
    function b(){
        function c(){}
        c()//Ejecutamos nuestra function c
    }
    b() //Ejecutanos nuestra función b que ejecuta la function c
}
a()//Ejecutamos nuestra función que jecuta nuestra function b


//Funciones en objetos -> Métodos
const rocket={
    name:'Falcon 9',
    launchMessage: function launchMessage(){ //Método
        console.log('ðŸ”¥')
    }
}
rocket.launchMessage() //Ejecutamos nuestro método de nuestro objeto