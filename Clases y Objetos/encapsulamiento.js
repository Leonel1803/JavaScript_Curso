class Course {
    constructor({ //Recibe un objeto como parámetro. ya no debes poner los parámetros en orden al llamar al constructo, solo debe coindisir el nombre del atributo que mandes
      name,
      classes = [],
    }) {
      this._name = name; //El guión bajo en nuestros atributos da a entender que este atributo debe ser private y que usemos más bien los getters y setter para manipular y ver el dato
      this.classes = classes;
    }
  
    //Setters y getters de nuestros atributos
    get name() { //Regresa nuestro valor name
      return this._name;
    }
  
    set name(nuevoNombrecito) { //Asigna un valor a name de acuerdo a unas condiciones especificadas
      if (nuevoNombrecito === "Curso Malito de Programación Básica") {
        console.error("Web... no");
      } else {
        this._name = nuevoNombrecito; 
      }
    }
}
  
const cursoProgBasica = new Course({ //Así llamamos a nuestro método set name de nuestra clase Course. Usando "name" de método y no de atributo
    name: "Curso Gratis de Programación Básica", //Este es el parámetro. Usa "name" como intermediario para asignar un valor a _name
});

cursoProgBasica.name = "Curso Malito de Programación Básica" //usa el set de name pero por su condición no hacela nueva asignación
console.log(cursoProgBasica.name); //usa el get de name
  
const cursoDefinitivoHTML = new Course({
    name: "Curso Definitivo de HTML y CSS",
});
const cursoPracticoHTML = new Course({
    name: "Curso Practico de HTML y CSS",
});
  
  
class LearningPath {
    constructor({
      name,
      courses = [],
    }) {
      this.name = name;
      this.courses = courses;
    }
}
  
const escuelaWeb = new LearningPath({
    name: "Escuela de Desarrollo Web",
    courses: [
      cursoProgBasica,
      cursoDefinitivoHTML,
      cursoPracticoHTML,
    ],
});
  
const escuelaData = new LearningPath({
    name: "Escuela de Data Science",
    courses: [
      cursoProgBasica,
      "Curso DataBusiness",
      "Curso Dataviz",
    ],
});
  
const escuelaVgs = new LearningPath({
    name: "Escuela de Vidweojuegos",
    courses: [
      cursoProgBasica,
      "Curso de Unity",
      "Curso de Unreal",
    ],
})
  
class Student {
    constructor({
      name,
      email,
      username,
      twitter = undefined,
      instagram = undefined,
      facebook = undefined,
      approvedCourses = [],
      learningPaths = [],
    }) {
      this.name = name;
      this.email = email;
      this.username = username;
      this.socialMedia = {
        twitter,
        instagram,
        facebook,
      };
      this.approvedCourses = approvedCourses;
      this.learningPaths = learningPaths;
    }
}
  
const juan2 = new Student({
    name: "JuanDC",
    username: "juandc",
    email: "juanito@juanito.com",
    twitter: "fjuandc",
    learningPaths: [
      escuelaWeb,
      escuelaVgs,
    ],
});
  
const miguelito2 = new Student({
    name: "Miguelito",
    username: "migelitofeliz",
    email: "miguelito@juanito.com",
    instagram: "migelito_feliz",
    learningPaths: [
      escuelaWeb,
      escuelaData,
    ],
});