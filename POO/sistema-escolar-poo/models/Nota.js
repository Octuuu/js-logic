class Nota {
    constructor(valor, materia) {
      if (valor < 1 || valor > 5) throw new Error('La nota debe estar entre 1 y 5');
      this.valor = valor;
      this.materia = materia;
      this.fecha = new Date();
    }
  }
  
  export default Nota;
  