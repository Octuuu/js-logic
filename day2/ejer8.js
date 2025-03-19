function agruparElementos(arr) {
    let grupos = {};
    arr.forEach(num => {
        if (!grupos[num]) grupos[num] = [];
        grupos[num].push(num);
    });

    return Object.values(grupos);
}

console.log(agruparElementos([1, 2, 2, 3, 3, 3, 4])); 
// [[1], [2, 2], [3, 3, 3], [4]]

/*
3️⃣ Agrupar elementos repetidos en un array
📌 Descripción: Agrupar los elementos iguales en subarrays.
*/