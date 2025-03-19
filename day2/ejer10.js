function maxSubarray(arr) {
    let maxActual = arr[0], maxGlobal = arr[0];

    for (let i = 1; i < arr.length; i++) {
        maxActual = Math.max(arr[i], maxActual + arr[i]);
        maxGlobal = Math.max(maxGlobal, maxActual);
    }

    return maxGlobal;
}

console.log(maxSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6 ([4, -1, 2, 1])




/*
5️⃣ Encontrar el subarray con la suma más grande (Kadane's Algorithm)
📌 Descripción: Dado un array de números (positivos y negativos), encontrar el subarray continuo con la mayor suma.
*/