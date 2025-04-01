class Cola {
    constructor() {
        this.items = [];
    }

    enqueue(elemento) {
        this.items.push(elemento);
    }

    dequeue() {
        return this.items.shift();
    }

    mostrar() {
        console.log(this.items);
    }
}

// Prueba
let cola = new Cola();
cola.enqueue(1);
cola.enqueue(2);
cola.enqueue(3);
cola.dequeue();
cola.mostrar(); // [2, 3]
