class Pila {
    constructor() {
        this.items = [];
    }

    push(elemento) {
        this.items.push(elemento);
    }

    pop() {
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    mostrar() {
        console.log(this.items);
    }
}

// Prueba
let pila = new Pila();
pila.push(5);
pila.push(10);
pila.push(15);
pila.pop();
pila.mostrar(); // [5, 10]
