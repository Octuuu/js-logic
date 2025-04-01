class Nodo {
    constructor(valor) {
        this.valor = valor;
        this.izq = null;
        this.der = null;
    }
}

class ArbolBinario {
    constructor() {
        this.raiz = null;
    }

    insertar(valor) {
        let nuevoNodo = new Nodo(valor);
        if (!this.raiz) {
            this.raiz = nuevoNodo;
            return;
        }
        let actual = this.raiz;
        while (true) {
            if (valor < actual.valor) {
                if (!actual.izq) {
                    actual.izq = nuevoNodo;
                    return;
                }
                actual = actual.izq;
            } else {
                if (!actual.der) {
                    actual.der = nuevoNodo;
                    return;
                }
                actual = actual.der;
            }
        }
    }
}

// Prueba
let arbol = new ArbolBinario();
arbol.insertar(10);
arbol.insertar(5);
arbol.insertar(15);
console.log(arbol);
