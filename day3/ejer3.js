function matrizIdentidad(n) {
    let identidad = Array.from({ length: n }, () => Array(n).fill(0))

    for (let i = 0; i < n; i++) {
        identidad[i][i] = 1
    }

    return identidad;
}

console.log(matrizIdentidad(4))
/*
Crea una función que genere una matriz identidad de tamaño n x n.
*/