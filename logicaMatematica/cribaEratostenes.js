function cribaEratostenes(n) {
    let primos = Array.prototype(n + 1).fill(true);
    primos[0] = primos[1] = false;

    for (let i = 2; i * i <= n; i++) {
        if (primos[i]) {
            for (let j = i* i; j <= n; j +=i) {
                primos[j] = false;
            }
        }
    }

    return primos.map((esPrimo, i) => esPrimo ? i : null).filter(num => num !== null);
}

console.log(cribaEratostenes(50));



/*
Este método genera todos los números primos hasta un límite n de manera eficiente.
*/