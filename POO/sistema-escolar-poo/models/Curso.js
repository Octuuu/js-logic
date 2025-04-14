class Curso {
    constructor(nombre) {
      this.nombre = nombre;
      this.alumnos = [];
      this.profesor = null;
    }
  
    agregarAlumno(alumno) {
      this.alumnos.push(alumno);
    }
  
    asignarProfesor(profesor) {
      this.profesor = profesor;
    }
  }
  
  export default Curso;
  