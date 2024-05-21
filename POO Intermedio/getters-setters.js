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
    const private = { //Atributos privados
      "_name": name,
    };
  
    const public = { //Atributos públicos
      "_name": name,
      email,
      age,
      approvedCourses,
      learningPaths,
      socialMedia: {
        twitter,
        instagram,
        facebook,
      },

      //Getters y setters
      get name() {
        return private["_name"];
      },
      set name(newName) {
        if (newName.length != 0) {
          private["_name"] = newName;
        } else {
          console.warn("Tu nombre debe tener al menos 1 caracter");
        }
      },
    };
  
    return public;
}
  
const juan = createStudent({ email: "juanito@frijoles.co", name: "Juanito" }); //Al tener un get y set con "name"; al usar esa variable no llamará como tal a la variable, sino sus setters y/o getters 