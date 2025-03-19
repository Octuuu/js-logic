function subconjuntos(arr) {
    let resultado = [[]];

    for (let num of arr) {
        let nuevosSub = resultado.map(sub => [...sub, num]);
        resultado = resultado.concat(nuevosSub);
    }
    return resultado;
}

console.log(subconjuntos([1, 2, 3])); 

/*
Subconjuntos de un Array
📌 Dado un array de números únicos, devuelve todos sus subconjuntos posibles.
*/