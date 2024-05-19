class Animal {
    constructor(nombre, tipo) {
      this.nombre = nombre;
      this.tipo = tipo;
    }
    emitirSonido() {
      console.log("El animal emite un sonido");
    }
}
  
class Perro extends Animal { //Heredamos la clase Animal
    constructor(nombre, tipo, raza) { //Usamos el constructor de Perro
      super(nombre, tipo); //Aquí usamos (se ejecuta) el constructor de nuestra clase heredada (Animal) con los parámetros que sacamos del constructor de esta clase
      this.raza = raza;
    }
    emitirSonido() { //Podemos crear métodos con el mismo nombre y actúan diferente dependiendo del tipo de clase donde se está llamando (Polimorfismo)
      console.log("El perro ladra");
    }
    correr() {
      console.log(`${this.nombre} corre alegremente`);
    }
}
  
const perro1 = new Perro("Bobby", "Perro", "Pug");
  
console.log(perro1);
perro1.correr();
perro1.emitirSonido();
  
perro1.nuevoMetodo = function () { //Creamos un nuevo método solo para el objeto perro1
    console.log("Este es un metodo");
};
  
Perro.prototype.segundoMetodo = function () { //Creamos un nuevo método para la clase Perro
    console.log("Es otro nuevo metodo");
};
  
Animal.prototype.tercerMetodo = function () { //Creamos un nuevo método para la clase Animal
    console.log("Un metodo mÃ¡s");
};