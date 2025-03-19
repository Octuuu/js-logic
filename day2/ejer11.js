function longestIncreasingSubsequence(arr) {
    let dp = new Array(arr.length).fill(1);

    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] > arr[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }

    return Math.max(...dp);
}

console.log(longestIncreasingSubsequence([10, 22, 9, 33, 21, 50, 41, 60])); // 5 ([10, 22, 33, 50, 60])



/*
 6️⃣ Buscar la subsecuencia creciente más larga
📌 Descripción: Encontrar la subsecuencia creciente más larga en un array.
*/