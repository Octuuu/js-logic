function repeticion(arr){
    let frecuencia = {};
    let maxNum = arr[0]; maxF = 0;

    for (let num of arr) {
        frecuencia[num] = (frecuencia[num] || 0) + 1;
        if (frecuencia[num] > maxF) {
            maxNum = num;
            maxF = frecuencia[num];
        }
    }
    return {num: maxNum, frecuencia: maxF};
}

console.log(repeticion([1, 3, 2, 3, 3, 1, 5, 1, 3])); 
console.log(repeticion([7, 8, 9, 7, 8, 8, 7, 7])); // { elemento: 7, repeticiones: 4 }


/*
2️⃣ Encontrar el Elemento que Más Se Repite en un Array
📌 Dado un array, encuentra el número más frecuente y cuántas veces aparece.
*/
