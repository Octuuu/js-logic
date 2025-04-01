function quickSelect(arr, k) {
    if (arr.length === 1) return arr[0];

    let pivot = arr[arr.length - 1];
    let left = arr.filter(x => x < pivot);
    let right = arr.filter(x => x > pivot);
    let middle = arr.filter(x => x === pivot);

    if (k <= left.length) return quickSelect(left, k);
    if (k <= left.length + middle.length) return pivot;
    return quickSelect(right, k - left.length - middle.length);
}

// Prueba
console.log(quickSelect([7, 10, 4, 3, 20, 15], 3)); // 7 (tercer menor)
console.log(quickSelect([7, 10, 4, 3, 20, 15], 5)); // 15 (quinto menor)
