import Persona from './Persona.js';

class Alumno extends Persona {
  constructor(nombre, apellido, dni) {
    super(nombre, apellido, dni);
    this.notas = [];
    this.asistencias = [];
  }

  agregarNota(nota) {
    this.notas.push(nota);
  }

  registrarAsistencia(asistencia) {
    this.asistencias.push(asistencia);
  }
}

export default Alumno;
