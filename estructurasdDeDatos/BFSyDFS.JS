class Grafo {
    constructor() {
        this.adyacencias = new Map();
    }

    agregarNodo(nodo) {
        if (!this.adyacencias.has(nodo)) {
            this.adyacencias.set(nodo, []);
        }
    }

    agregarArista(nodo1, nodo2) {
        this.adyacencias.get(nodo1).push(nodo2);
        this.adyacencias.get(nodo2).push(nodo1); // Si es no dirigido
    }

    bfs(inicio) {
        let visitados = new Set();
        let cola = [inicio];
        
        while (cola.length) {
            let nodo = cola.shift();
            if (!visitados.has(nodo)) {
                console.log(nodo);
                visitados.add(nodo);
                cola.push(...this.adyacencias.get(nodo));
            }
        }
    }

    dfs(inicio, visitados = new Set()) {
        if (visitados.has(inicio)) return;
        console.log(inicio);
        visitados.add(inicio);

        for (let vecino of this.adyacencias.get(inicio)) {
            this.dfs(vecino, visitados);
        }
    }
}

// Prueba
let g = new Grafo();
g.agregarNodo("A");
g.agregarNodo("B");
g.agregarNodo("C");
g.agregarArista("A", "B");
g.agregarArista("A", "C");

console.log("BFS:");
g.bfs("A"); // A B C

console.log("DFS:");
g.dfs("A"); // A B C
