function diagonales(matriz) {
    let principal = [];
    let secundaria = [];
    let n = matriz.length;

    for (let i = 0; i < n; i++) {
        principal.push(matriz[i][i]);
        secundaria.push(matriz[i][n - 1 - i]);
    }

    return { principal, secundaria };
}

let cuadrada = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(diagonales(cuadrada));



/*
Diagonal Principal y Secundaria
Dada una matriz cuadrada, muestra la diagonal principal y la secundaria. 
*/