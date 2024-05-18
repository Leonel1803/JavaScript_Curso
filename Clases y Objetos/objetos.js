/*

estructura de datos

key / value 

objeto {
  propiedad: valor, 
  propiedad: valor, 
  propiedad: valor 
  Metodos
}

*/

//Abstraemos objetos de la realidad a programación 
//(cada objetos tiene sus atributos y métodos para poder 
//actuar como en la vida real)

const persona = { //Objeto que se llama persona
    //Atributos (valores en el objeto)
    nombre: "John", 
    edad: 30,
    direccion: {
      calle: "Av Insurgentre 187",
      ciudad: "CDMX",
    },
    //Métodos (funciones del objeto)
    saludar() {
      console.log(`hola, mi nombre es ${persona.nombre}`);
    },
};
  
console.log(persona); //Nuestro objeto persona
  
console.log(persona.nombre); //El atributo nombre de nuestro objeto persona
  
persona.saludar(); //Ejecutamos el método saludar de nuestro objeto persona
  
persona.telefono = "555-555-5555"; //Creamos un nuevo atributo en nuestro objeto y asignamos un string a nuestro atributo teléfono de nuestro objeto persona
  
console.log(persona.telefono);
  
persona.despedir = () => { //Creamos uin nuevo método en nuestro objeto
    console.log("Adios");
};
  
persona.despedir();
  
console.log(persona.direccion.calle);
  
delete persona.telefono; //Eliminamos el atributo de nuestro objeto
  
delete persona.despedir(); //Eliminamos el metodo de nuestro objeto