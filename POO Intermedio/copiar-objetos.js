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


//Copia con JSON.parse y JSON.stringfy. Es una buena slución para copiar atributos, pero no nos podrá copiar métodos
//Los objetos están en formato JSON, por lo tanto si copiamos el JSON de otro objeto, esto significa hacer una copia del contenido
//Obtenemos los JSON de los objetos usando lo métodos JSON.parse y JSON.stringfy

const stringifiedComplexObj = JSON.stringify(obj1); //Cremos un string de un objeto
const obj5 = JSON.parse(stringifiedComplexObj); //Creamos un objeto a partir de un string

//Ahora al modificar un atributo de obj5 ya noa afevtará a obj1, debido a que se hizo una copia y no una referncia de memoria (apuntador)


//Deep Copy (Recursividad) Esta es la forma para copiar todo correctamente de un objeto
function isObject(subject){
  return typeof subject=="object";
}

function isArray(subject){
  return Array.isArray(subject);
}

//Sabes que se puede hacer recursividad cuando puedes usar bucles para resolver el problema
//O es un problema de una caja dentro de otra caja
function deepCopy(subject){
  let copySubject; //Este será el objeto con la copia completa que se devolverá

  //Verifica si es un objeto o un array
  const subjectIsObject = isObject(subject);
  const subjectIsArray = isArray(subject);

  if(subjectIsArray){
    copySubject = [];
  }
  else if(subjectIsObject){
    copySubject = {};
  }
  else{
    return subject; //Si no es ninguno entonces se puede mandar así, ya que significa que es un valor que no apunta a memeoria
  }

  for(key in subject){ //Revisa que hay dentro de los objetos o arrays
    const keyIsObject = isObject(subject[key]);

    if(keyIsObject){ //Si es un objeto eontonces haremos un llamado recursivo
      copySubject[key] = deepCopy(subject[key]);
    }
    else{
      if(subjectIsArray){
        copySubject.push(subject[key]);
      }
      else{
        copySubject[key] = subject[key];
      }
    }
  }

  return copySubject;
}

const studentBase={
  name:undefined,
  email:undefined,
  age:undefined,
  approvedCourses:undefined,
  learningPaths:undefined,
  socialMedia:{
    twitter:undefined,
    instagram:undefined,
    facebook:undefined,
  },
};

const juan = deepCopy(studentBase); //Copiamos studentBase en juan
Object.seal(juan);
