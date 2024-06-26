function Persona(nombre,apellido,edad){ //Esto es una clase
    this.nombre = nombre; //Al crear un objeto, los parámetros pasados se le asignarán a los atributos del objeto
    this.apellido = apellido;
    this.edad = edad;
} //Una clase es como un plano para los objetos. 
//Cada objeto creado con una clase asignada, tiene los mismos atributos y métodos que la clase

//Ejemplo teórico: existen muchas personas pero la gran mayoría tiene similitudes. Son objetos diferentes cada una pero tienen los mismos atributos (tal vez con diferentes valores) y también tienen los mismos métodos

const persona1=new Persona("Juan","Perez",20); //Nueva persona con sus atributos
console.log(persona1);

persona1.nacionalidad="Mexicano"; //Al objeto persona1 le añadimos el atributo nacionalidad y le asignamos un valor
console.log(persona1);

const persona2=new Persona("Diego","De Granda",35); //Nueva persona con sus atributos
console.log(persona2);

Persona.prototype.saludar= function() { //Le añadimos el método saludar a la clase Persona. Eso quiere decir que todos los objetos creados con la clase Persona ya tendrá ese método disponible
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
};

persona1.saludar();
persona2.saludar();

//Los objetos siempre se imprimen en objeto JSON