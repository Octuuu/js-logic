function permutaciones(arr) {
    if (arr.length === 0) return [[]];
    let resultado = [];

    for (let i = 0; i < arr.length; i++) {
        let resto = arr.slice(0, i).concat(arr.slice(i + 1));
        let subPermutaciones = permutaciones(resto);

        for (let sub of subPermutaciones) {
            resultado.push([arr[i], ...sub]);
        }
    }
    return resultado;
}

console.log(permutaciones([1,2,3])); 

/*
 Permutaciones de un Array
📌 Dado un array de números únicos, devuelve todas sus permutaciones posibles.
*/
