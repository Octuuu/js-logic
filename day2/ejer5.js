function elementoMasFrecuente(arr) {
    let freq = {};
    let maxNum = arr[0], maxCount = 1;

    arr.forEach(num => {
        freq[num] = (freq[num] || 0) + 1;
        if (freq[num] > maxCount) {
            maxNum = num;
            maxCount = freq[num];
        }
    });

    return maxNum;
}

console.log(elementoMasFrecuente([3, 5, 3, 2, 5, 5, 7])); // 5
