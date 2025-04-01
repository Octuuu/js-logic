function busquedaBinaria(arr, x) {
    let inicio = 0, fin = arr.length - 1;
    while (inicio <= fin) {
        let mid = Math.floor((inicio + fin) / 2);
        if (arr[mid] === x) return mid;
        x < arr[mid] ? fin = mid - 1 : inicio = mid + 1;
    }
    return -1;
}

// Prueba
console.log(busquedaBinaria([1, 3, 5, 7, 9, 11], 7)); // 3
console.log(busquedaBinaria([1, 3, 5, 7, 9, 11], 4)); // -1
