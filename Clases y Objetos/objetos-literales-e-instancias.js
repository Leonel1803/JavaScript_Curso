const natalia = { //Objeto literal
    name: "Natalia",
    age: 20,
    cursosAprobados: [
      "Curso Definitivo de HTML y CSS",
      "Curso Práctico de HTML y CSS",
    ],
    aprobarCurso(nuevoCursito) {
      this.cursosAprobados.push(nuevoCursito);
    },
};
  
function Student(name, age, cursosAprobados) { //Clase Student
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
    // this.aprobarCurso = function (nuevoCursito) {
    //   this.cursosAprobados.push(nuevoCursito);
    // }
}
  
Student.prototype.aprobarCurso = function (nuevoCursito) { //Creamos un método nuevo en nuestra clase Student
    this.cursosAprobados.push(nuevoCursito);
}
  
const juanita = new Student( //Creamos un objeto de clase (instancia de nuestra clase Student)
    "Juanita Alejandra", //name
    15, //edad
    [ //cursos aprobados
      "Curso de Introducción a la Producción de Videojuegos",
      "Curso de Creación de Personajes",
    ],
);