function esPrimo(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

console.log(esPrimo(11)); // true
console.log(esPrimo(25)); // false
console.log(esPrimo(101)); // true