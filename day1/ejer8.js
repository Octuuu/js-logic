function numeroFaltante(arr) {
    let n = arr.length + 1;
    let sumaEsperada = (n * (n + 1)) / 2;
    let sumaActual = arr.reduce((acc, num) => acc + num, 0);
    return sumaEsperada - sumaActual;
}

console.log(numeroFaltante([1,2,3,5,6]));


/*
Número que Falta en una Secuencia
📌 Dado un array de números del 1 al N desordenados y con un número faltante, encuentra el número que falta.
*/