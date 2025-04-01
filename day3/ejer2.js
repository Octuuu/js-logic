function maximosPorFila(matriz) {
    return matriz.map(fila => Math.max(...fila));
}

let nums = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

console.log(maximosPorFila(nums)); // [3, 6, 9]
/*
Dada una matriz, encuentra el número más grande de cada fila.
*/