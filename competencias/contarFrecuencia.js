function contarFrecuencia(arr) {
    let mapa = new Map();
    for (let num of arr) {
        mapa.set(num, (mapa.get(num) || 0) + 1);
    }
    return Object.fromEntries(mapa);
}

// Prueba
console.log(contarFrecuencia([1, 2, 2, 3, 3, 3]));
