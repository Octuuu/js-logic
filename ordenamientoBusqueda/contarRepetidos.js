function contarRepetidos(arr) {
    let conteo = {};
    for (let num of arr) {
        conteo[num] = (conteo[num] || 0) + 1;
    }
    return conteo;
}

// Prueba
console.log(contarRepetidos([1, 1, 2, 3, 3, 3, 4])); // { '1': 2, '2': 1, '3': 3, '4': 1 }
