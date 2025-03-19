function contarParesImpares(arr) {
    let pares = arr.filter(num => num % 2 === 0).length;
    let impares = arr.length - pares;
    return { pares, impares };
}

console.log(contarParesImpares([1, 2, 3, 4, 5, 6])); // { pares: 3, impares: 3 }
