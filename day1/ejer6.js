function esPrimo(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}


function generarPrimosHasta(N) {
    let primos = [];
    let num = 2;
    while (num <= N) {
        if (esPrimo(num)) primos.push(num);
        num++;
    }
    return primos;
}

function sumOfConsecutivePrimes(N) {
    let primos = generarPrimosHasta(N);
    let suma = 0, resultado = [];

    for (let i = 0; i < primos.length; i++) {
        suma += primos[i];
        resultado.push(primos[i]);
        if (suma === N) return resultado;
        if (suma > N) break;
    }

    return "No se puede expresar como suma de primos consecutivos";
}

console.log(sumOfConsecutivePrimes(41));
// Salida: [2, 3, 5, 7, 11, 13]



/*
Suma de Números Primos Consecutivos
Encuentra la menor cantidad de números primos consecutivos cuya suma sea N.
*/