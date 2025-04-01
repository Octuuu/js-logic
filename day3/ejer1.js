function sumaMatrices(matriz1, matriz2) {
    let resultado = [];

    for (let i = 0; i < matriz1.length; i++) {
        let fila = [];
        for (let j = 0; j < matriz2.length; j++) {
            fila.push(matriz1[i][j] + matriz2[i][j])
        }
        resultado.push(fila);
    }

    return resultado;
}

// prueba
let A = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

let B = [
    [9, 8, 7],
    [6, 5, 4],
    [3, 2, 1]
]

console.log(sumaMatrices(A, B));

/*
Escribe una función que sume dos matrices del mismo tamaño.
*/

