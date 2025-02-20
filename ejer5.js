function esPrimo(n){
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++){
        if (n % i === 0) return false;
    } 
    return true;
}

function gemelosPrimos(N){
    let primosGemelos = [];
    for (let i = 2; i < N; i++){
        if (esPrimo(i) && esPrimo(i + 2)){
            primosGemelos.push([i, i + 2]);
        }
    }
    return primosGemelos;
}

console.log(gemelosPrimos(50)); // [ [2, 4], [3, 5], [5, 7], [11, 13], [17, 19], [29, 31] ]




/*
Números Primos Gemelos
Encuentra todos los pares de números primos gemelos menores que N.
*/