function requiredParam(param) {
    throw new Error(param + " es obligatorio");
}
  
function createStudent({
    //Parámetros obligatorios RORO
    name = requiredParam("name"), //Por defecto, cuando no envíemos un parámetro, llama a la funcion requiredParam
    email = requiredParam("email"), //Por defecto, cuando no envíemos un parámetro, llama a la funcion requiredParam
    age,
    twitter, //Si no se especifica un valor entonces es undefined
    instagram,
    facebook,
    approvedCourses = [], //Decimos que por defecto es una lista vacía (si no se envía un parámetro)
    learningPaths = [], //Decimos que por defecto es una lista vacía (si no se envía un parámetro)
  } = {}) { //Le decimos que por defecto es un objeto vacío
    return {
      name,
      email,
      age,
      approvedCourses,
      learningPaths,
      socialMedia: {
        twitter,
        instagram,
        facebook,
      },
    };
}
  
const juan = createStudent({ email: "juanito@frijoles.co", name: "Juanito" });