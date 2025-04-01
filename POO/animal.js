class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }

    hacerSonido() {
        console.log(`${this.nombre} hace un sonido.`);
    }
}

class Perro extends Animal {
    hacerSonido() {
        console.log(`${this.nombre} dice: Guau Guau!`);
    }
}

class Gato extends Animal {
    hacerSonido() {
        console.log(`${this.nombre} dice: Miau Miau!`);
    }
}

// Prueba
const perro = new Perro("Rex");
const gato = new Gato("Michi");
perro.hacerSonido(); // "Rex dice: Guau Guau!"
gato.hacerSonido();  // "Michi dice: Miau Miau!"





/*
Crea una clase base Animal y subclases Perro y Gato.
*/
