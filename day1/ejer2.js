
function repeticion(arr){
    let frecuencia = {};
    let maxNum = arr[0]; maxF = 0;
 
    for (let num of arr) {
        frecuencia[num] = (frecuencia[num] || 0) + 1;
        if (frecuencia[num] > maxF){
            maxNum = num;
            maxF = frecuencia[num];
        }
    }
    return {num: maxNum, frecuencia: maxF}
}

console.log(repeticion([2,3,4,5,3,3]));

/*
2️⃣ Encontrar el Elemento que Más Se Repite en un Array
📌 Dado un array, encuentra el número más frecuente y cuántas veces aparece.
*/
