function quickSort(arr) {
    if (arr.length < 2) return arr;

    let pivot = arr[arr.length - 1];
    let left = arr.filter(x => x < pivot);
    let right = arr.filter(x => x > pivot);
    let middle = arr.filter(x => x === pivot);

    return [...quickSort(left), ...middle, ...quickSort(right)];
}

// Prueba
console.log(quickSort([33, 10, 55, 71, 2, 8])); // [2, 8, 10, 33, 55, 71]
