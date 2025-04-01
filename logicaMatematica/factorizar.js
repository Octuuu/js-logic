function factorizar(n) {
    let factores = [];
    for (let i = 2; i <= Math.sqrt(n); i++) {
        while (n % i === 0) {
            factores.push(i);
            n /= i;
        }
    }
    if (n > 1) factores.push(n);
    return factores;
}

console.log(factorizar(56)); // [2, 2, 2, 7]
console.log(factorizar(315)); // [3, 3, 5, 7]