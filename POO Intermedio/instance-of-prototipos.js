function requiredParam(param) {
    throw new Error(param + " es obligatorio");
}
  
function LearningPath({
    name = requiredParam("name"),
    courses = [],
  }) {
    this.name = name;
    this.courses = courses;
}
  
function Student({
    name = requiredParam("name"),
    email = requiredParam("email"),
    age,
    twitter,
    instagram,
    facebook,
    approvedCourses = [],
    learningPaths = [],
  } = {}) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.approvedCourses = approvedCourses;
    this.socialMedia = {
      twitter,
      instagram,
      facebook,
    };
   
    //Hacemos ducktyping para asignar learning paths a learningPaths (this)
    if (isArray(learningPaths /*learningPaths del parámetro*/)) { //Validamos si es un array
      this.learningPaths = []; //learningPaths del objeto
      
      for (learningPathIndex in learningPaths) {
        if (learningPaths[learningPathIndex] instanceof LearningPath) { //Verifica si el arreglode learningPaths contiene solo instancias de LearningPath
          this.learningPaths.push(learningPaths[learningPathIndex]); //Si sí es un learning path, el learning path se garegara a la lista de nuestro objeto llamada learningPaths
        }
      }
    }
}
  
//Instancias de pototipos
const escuelaWeb = new LearningPath({ name: "Escuela de WebDev" });
const escuelaData = new LearningPath({ name: "Escuela de Data Science" });
const juan = new Student({
    email: "juanito@frijoles.co",
    name: "Juanito",
    learningPaths: [
      escuelaWeb,
      escuelaData,
    ],
});