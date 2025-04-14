import Persona from './Persona.js';

class Profesor extends Persona {
  constructor(nombre, apellido, dni, especialidad) {
    super(nombre, apellido, dni);
    this.especialidad = especialidad;
  }

  asignarMateria(materia) {
    this.materia = materia;
  }
}

export default Profesor;
