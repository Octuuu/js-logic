function transponerMatriz(matriz) {
    let filas = matriz.length;
    let columnas = matriz[0].length;
    let trnspuesta = Array.from({ length: columnas }, () => Array(filas).fill(0));

    for (let i = 0; i < filas; i++) {
        for (let j = 0; j < columnas; j++) {
            trnspuesta[j][i] = matriz[i][j];
        }
    }

    return trnspuesta;
}

let original = [
    [1, 2, 3],
    [4, 5, 6]
];

console.log(transponerMatriz(original));


/*
Transponer una Matriz
Convierte las filas en columnas y viceversa.
*/