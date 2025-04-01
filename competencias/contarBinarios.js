function contarBinarios(n, prev = 0, memo = {}) {
    if (n === 0) return 1;
    let clave = `${n},${prev}`;
    if (memo[clave] !== undefined) return memo[clave];

    let incluirCero = contarBinarios(n - 1, 0, memo);
    let incluirUno = prev === 0 ? contarBinarios(n - 1, 1, memo) : 0;

    return (memo[clave] = incluirCero + incluirUno);
}

// Prueba
console.log(contarBinarios(3)); // 5
