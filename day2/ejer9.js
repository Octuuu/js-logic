function rotarMatriz(matriz) {
    let N = matriz.length;
    let nuevaMatriz = Array.from({ length: N }, () => Array(N).fill(0));

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            nuevaMatriz[j][N - 1 - i] = matriz[i][j];
        }
    }

    return nuevaMatriz;
}

console.log(rotarMatriz([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]));
// [
//  [7, 4, 1],
//  [8, 5, 2],
//  [9, 6, 3]
// ]


/*
4️⃣ Rotar una matriz NxN 90° hacia la derecha
📌 Descripción: Rotar una matriz cuadrada 90° en sentido horario.
*/