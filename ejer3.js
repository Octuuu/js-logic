
function resolverSudoku(tablero){
    function esValido(fila , col, num){
        for (let i = 0; i < 9 ; i++) {
            if (tablero[fila][i] === num || tablero[i][col] === num) return false;
            let subFila = Math.floor(fila / 3) * 3 + Math.floor(i / 3);
            let subCol = Math.floor(col / 3) * 3 + (i % 3);
            if (tablero[subFila][subCol] === num) return false;
        }
        return true;
    }

    function resolver(){
        for (let fila = 0 ; fila < 9 ; fila++) {
            for (let col = 0 ; col < 9 ; col++) {
                if (tablero[fila][col] === 0) {
                    for (let num = 1 ; num <= 9 ; num++) {
                        if (esValido(fila, col, num)) {
                            tablero[fila][col] = num;
                            if (resolver()) return true;
                            tablero[fila][col] = 0; 
                        }
                    }
                    return false;
                }
            }
        }
        return true;
    }
    resolver()
    return tablero;
}

let sudoku = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]
];

console.log(resolverSudoku(sudoku));
/*
 Resolver un Sudoku
📌 Dado un tablero de Sudoku incompleto, completa el tablero correctamente.
*/

