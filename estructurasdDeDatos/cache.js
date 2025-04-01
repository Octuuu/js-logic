class LRUCache {
    constructor(capacidad) {
        this.capacidad = capacidad;
        this.cache = new Map();
    }

    get(clave) {
        if (!this.cache.has(clave)) return -1;
        let valor = this.cache.get(clave);
        this.cache.delete(clave);
        this.cache.set(clave, valor);
        return valor;
    }

    put(clave, valor) {
        if (this.cache.has(clave)) this.cache.delete(clave);
        this.cache.set(clave, valor);
        if (this.cache.size > this.capacidad) {
            this.cache.delete(this.cache.keys().next().value);
        }
    }
}

// Prueba
let lru = new LRUCache(2);
lru.put(1, "A");
lru.put(2, "B");
lru.get(1);
lru.put(3, "C");
console.log(lru.cache);
