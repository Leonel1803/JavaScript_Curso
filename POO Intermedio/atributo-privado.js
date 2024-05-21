function requiredParam(param) {
    throw new Error(param + " es obligatorio");
}
  
function createStudent({
    name = requiredParam("name"),
    email = requiredParam("email"),
    age,
    twitter,
    instagram,
    facebook,
    approvedCourses = [],
    learningPaths = [],
  } = {}) {
    const private = { //Aquí tendremos nuestros atributos que deben pasar por una validación para asignarse un valor
      "_name": name,
    };
  
    const public = { //Estos atributos se pueden reasignar o asignar en cualquier momento
      email,
      age,
      approvedCourses,
      learningPaths,
      socialMedia: {
        twitter,
        instagram,
        facebook,
      },
      readName() { //Leer nuestro nombre usando la referencia de _name dentro de nuestro atributos private
        return private["_name"];
      },
      changeName(newName) { //Solo podemos asignar valores con este método
        private["_name"] = newName;
      },
    };
  
    //Protegemos los métodos
    Object.defineProperty(public, "readName", {
      writable: false,
      configurable: false,
    });
    Object.defineProperty(public, "changeName", {
      writable: false,
      configurable: false,
    });
  
    return public;
}
  
const juan = createStudent({ email: "juanito@frijoles.co", name: "Juanito" });