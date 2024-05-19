const obj1 = {
    a: "a",
    b: "b",
    c: {
      d: "d",
      e: "e",
    },
};

//Para copiar objetos no se debe hacer así "const a = b" ya que si cambiaras algún valor de a, también cambiaría ese mimso valor de b
//Esto es debido a que en ese caso lo que hace es referenciar a "a" con "b" (referencia en memoria), realmente no se copia el objeto
//En realidad lo que se hico es copiar la dirección de memoria de b en a, la cual hace referencia a nuestros atributos, por eso estas cambian al usar el objeto b o a
 
//Shallow copy
const obj2 = {}; //Copia pero tiene problemas al tener arrays o otros objetos como atributos
for (prop in obj1) {
    obj2[prop] = obj1[prop]; //Se copia cada propiedad
}
  
const obj3 = Object.assign({}, obj1); //Tambien copia las propiedades, pero tiene el mismo problema que con el for
const obj4 = Object.create(obj1); //Tambien copia las propiedades, pero tiene el mismo problema que con el for


//Copia con JSON.parse y JSON.stringfy