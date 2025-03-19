function generarCombinaciones(arr) {
    let resultado = [];

    const backtrack = (combinacion, start) => {
        resultado.push([...combinacion]);
        for (let i = start; i < arr.length; i++) {
            combinacion.push(arr[i]);
            backtrack(combinacion, i + 1);
            combinacion.pop();
        }
    };

    backtrack([], 0);
    return resultado;
}

console.log(generarCombinaciones([1, 2, 3]));
// [[], [1], [1, 2], [1, 2, 3], [1, 3], [2], [2, 3], [3]]



/*
7️⃣ Generar todas las combinaciones posibles de un array
📌 Descripción: Dado un array, generar todas las combinaciones posibles de sus elementos.
*/