function busquedaLineal(arr, x) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === x) return i;
    }
    return -1;
}

// Prueba
console.log(busquedaLineal([4, 7, 1, 9, 3], 9)); // 3
console.log(busquedaLineal([4, 7, 1, 9, 3], 5)); // -1
