const juan = {
    name: "Juanito",
    age: 18,
    approvedCourses: ["Curso 1"],
    addCourse(newCourse) {
      console.log("This", this);
      console.log("This.approvedCourses", this.approvedCourses);
      this.approvedCourses.push(newCourse);
    }
};
  
//Métodos static de Object
console.log(Object.keys(juan)); 
console.log(Object.getOwnPropertyNames(juan));
console.log(Object.entries(juan)); //Aquí "this" ya no es el objeto juan, sino el array de arrays
console.log(Object.getOwnPropertyDescriptors(juan));

// Object.seal(juan); //Cambia el parámetro configurable a false de todos los atributos del objeto mandado
Object.freeze(juan); //Cambia el parámetro configurable y writable a false de todos los atributos del objeto mandado

// Object.defineProperties(juan, "pruebaNASA", {
//     value: "extraterrestre",
//     enumerable: true, //Listable o no listable. Object.keys
//     writable: true, //Propiedad editable o no editable. Sí eliminable
//     configurable: true //Propiedad eliminable o no eliminable
// }) //La asignamos una nueva propiedad a nuestro objeto y también le asignamos sus parámetros

Object.defineProperty(juan, "pruebaNASA", {
  value: "extraterrestre",
  enumerable: true, //Listable o no listable. Object.keys
  writable: true, //Propiedad editable o no editable. Sí eliminable
  configurable: true //Propiedad eliminable o no eliminable
}) //La asignamos una nueva propiedad a nuestro objeto y también le asignamos sus parámetros
