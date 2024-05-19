class Persona {
    constructor(nombre, edad) { //Nuestra función constructora de nuestra clase. La llamamos al hacer una nueva instancia (objeto) de nuestra clase
      this.nombre = nombre;
      this.edad = edad;
    }
    
    saludar() {
      console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} aÃ±os.`);
    }
} //La clase es el molde con el que se crean los objetos
  
const persona1 = new Persona("Mariana", 25);
  
persona1.saludar();