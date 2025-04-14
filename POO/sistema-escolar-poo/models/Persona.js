class Persona {
    constructor(nombre, apellido, dni) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.dni = dni;
    }
  
    obtenerNombreCompleto() {
      return `${this.nombre} ${this.apellido}`;
    }
  }
  
  export default Persona;
  