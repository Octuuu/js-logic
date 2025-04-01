function mergeSort(arr) {
    if (arr.length < 2) return arr;

    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

function merge(left, right) {
    let sorted = [];
    while (left.length && right.length) {
        sorted.push(left[0] < right[0] ? left.shift() : right.shift());
    }
    return sorted.concat(left, right);
}

// Prueba
console.log(mergeSort([10, 3, 5, 8, 4, 2])); // [2, 3, 4, 5, 8, 10]
