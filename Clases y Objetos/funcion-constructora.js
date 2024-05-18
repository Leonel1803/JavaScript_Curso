function Persona(nombre,apellido,edad){ //Esto es una clase
    this.nombre = nombre; //Al crear un objeto, los parámetros pasados se le asignarán a los atributos del objeto
    this.apellido = apellido;
    this.edad = edad;
} //Una clase es como un plano de los objetos. 
//Cada objeto creado con una clase asignada, tiene los mimso atributos y métodos que la clase

//Ejemplo teórico: existen muchas personas pero la gran mayoría tiene similitudes. Son objetos diferentyes cada una pero tienen los mimso atributos (tal vez con diferentes valores) y también tienen los mimso métodos

const persona1=new Persona("Juan","Perez",20); //Nueva persona con sus atributos
console.log(persona1);

persona1.nacionalidad="Mexicano";

const persona2=new Persona("Diego","De Granda",35); //Nueva persona con sus atributos
console.log(persona2);

Persona.prototype.saludar= function() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
};

persona1.saludar();persona2.saludar();