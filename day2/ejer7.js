function encontrarPares(arr, objetivo) {
    let pares = [];
    let visitados = new Set();

    arr.forEach(num => {
        let complemento = objetivo - num;
        if (visitados.has(complemento)) {
            pares.push([complemento, num]);
        }
        visitados.add(num);
    });

    return pares;
}

console.log(encontrarPares([2, 4, 3, 7, 5, 8, 1], 9)); 
// [[2, 7], [4, 5], [8, 1]]


/*
Encontrar pares de números que sumen un valor objetivo
📌 Descripción: Dado un array y un número objetivo, devuelve los pares de números cuya suma sea igual al objetivo.
*/