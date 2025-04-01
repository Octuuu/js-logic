function rotarMatriz(matriz) {
    let N = matriz.length;
    let resultado = Array.from({ length: N }, () => Array(N).fill(0));

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            resultado[j][N - 1 - i] = matriz[i][j];
        }
    }

    return resultado;
}

let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(rotarMatriz(matriz));




/*
Rotar una Matriz 90°
Escribe una función que rote una matriz cuadrada 90° en sentido horario.
*/