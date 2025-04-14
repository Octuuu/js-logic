class Materia {
    constructor(nombre) {
      this.nombre = nombre;
      this.curso = null;
    }
  
    asignarCurso(curso) {
      this.curso = curso;
    }
  }
  
  export default Materia;
  