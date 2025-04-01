class Node {
    constructor(valor) {
        this.valor = valor;
        this.siguiente = null;
    }
}

class ListaEnlazada {
    constructor() {
        this.cabeza = null;
    }

    agregar(valor) {
        let nuevoNodo = new Node(valor);
        if (!this.cabeza) {
            this.cabeza = nuevoNodo;
        } else {
            let actual = this.cabeza;
            while (actual.siguiente) {
                actual = actual.siguiente;
            }
            actual.siguiente = nuevoNodo;
        }
    }

    mostrar() {
        let actual = this.cabeza;
        let valores = [];
        while (actual) {
            valores.push(actual.valor);
            actual = actual.siguiente;
        }
        console.log(valores);
    }
}

// Prueba
let lista = new ListaEnlazada();
lista.agregar(10);
lista.agregar(20);
lista.agregar(30);
lista.mostrar(); // [10, 20, 30]
