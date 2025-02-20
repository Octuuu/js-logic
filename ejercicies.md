1️⃣ Número Primo
📌 Dado un número, determina si es primo.

js
Copiar
Editar
function esPrimo(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

console.log(esPrimo(7)); // true
console.log(esPrimo(10)); // false
2️⃣ Invertir una Cadena
📌 Dado un string, invierte su contenido.

js
Copiar
Editar
function invertirCadena(cadena) {
    return cadena.split('').reverse().join('');
}

console.log(invertirCadena("Hola")); // "aloH"
console.log(invertirCadena("Javascript")); // "tpircsavaJ"
3️⃣ Suma de Dígitos Recursiva
📌 Suma los dígitos de un número hasta que quede un solo dígito.

js
Copiar
Editar
function sumaDigitos(num) {
    if (num < 10) return num;
    let suma = num.toString().split('').reduce((acc, digito) => acc + Number(digito), 0);
    return sumaDigitos(suma);
}

console.log(sumaDigitos(987)); // 9 (9+8+7=24, 2+4=6)
console.log(sumaDigitos(456)); // 6 (4+5+6=15, 1+5=6)
4️⃣ Fibonacci Recursivo
📌 Calcula el n-ésimo término de la secuencia Fibonacci.

js
Copiar
Editar
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(5)); // 5
console.log(fibonacci(10)); // 55
5️⃣ Contar Vocales en un String
📌 Cuenta cuántas vocales hay en un string.

js
Copiar
Editar
function contarVocales(cadena) {
    let vocales = "aeiouAEIOU";
    return cadena.split('').filter(letra => vocales.includes(letra)).length;
}

console.log(contarVocales("Javascript")); // 3
console.log(contarVocales("Hola Mundo")); // 4
6️⃣ Encontrar el Segundo Número Más Grande
📌 Dado un array, encuentra el segundo número más grande.

js
Copiar
Editar
function segundoMayor(arr) {
    let unico = [...new Set(arr)].sort((a, b) => b - a);
    return unico.length > 1 ? unico[1] : null;
}

console.log(segundoMayor([10, 5, 20, 20, 8])); // 10
console.log(segundoMayor([5, 3, 3, 1])); // 3
Estos ejercicios te ayudarán a reforzar estructuras de control, funciones recursivas y manipulación de arrays. 🚀🔥






Dijiste:
ejercicios avanzados 
ChatGPT dijo:
ChatGPT
Aquí tienes ejercicios avanzados de lógica de programación en JavaScript, con soluciones explicadas.

1️⃣ Encontrar la Subcadena Más Larga Sin Repeticiones
📌 Dado un string, encuentra la longitud de la subcadena más larga sin caracteres repetidos.

js
Copiar
Editar
function longitudSubcadenaUnica(s) {
    let set = new Set();
    let maxLongitud = 0, izquierda = 0;

    for (let derecha = 0; derecha < s.length; derecha++) {
        while (set.has(s[derecha])) {
            set.delete(s[izquierda]);
            izquierda++;
        }
        set.add(s[derecha]);
        maxLongitud = Math.max(maxLongitud, derecha - izquierda + 1);
    }

    return maxLongitud;
}

console.log(longitudSubcadenaUnica("abcabcbb")); // 3 ("abc")
console.log(longitudSubcadenaUnica("bbbbb")); // 1 ("b")
console.log(longitudSubcadenaUnica("pwwkew")); // 3 ("wke")
💡 Explicación: Usa un conjunto (Set) para almacenar los caracteres y dos punteros (técnica de sliding window).

2️⃣ Encontrar el Elemento que Más Se Repite en un Array
📌 Dado un array, encuentra el número más frecuente y cuántas veces aparece.

js
Copiar
Editar
function elementoMasFrecuente(arr) {
    let frecuencia = {};
    let maxNum = arr[0], maxFrecuencia = 0;

    for (let num of arr) {
        frecuencia[num] = (frecuencia[num] || 0) + 1;
        if (frecuencia[num] > maxFrecuencia) {
            maxFrecuencia = frecuencia[num];
            maxNum = num;
        }
    }

    return { elemento: maxNum, repeticiones: maxFrecuencia };
}

console.log(elementoMasFrecuente([1, 3, 2, 3, 3, 1, 5, 1, 3])); // { elemento: 3, repeticiones: 4 }
console.log(elementoMasFrecuente([7, 8, 9, 7, 8, 8, 7, 7])); // { elemento: 7, repeticiones: 4 }
💡 Explicación: Se usa un objeto para contar repeticiones y se actualiza el número más frecuente.

3️⃣ Comprobar si un Número es una Potencia de 2
📌 Dado un número, verifica si es una potencia de 2.

js
Copiar
Editar
function esPotenciaDeDos(n) {
    return n > 0 && (n & (n - 1)) === 0;
}

console.log(esPotenciaDeDos(8)); // true (2^3)
console.log(esPotenciaDeDos(10)); // false
console.log(esPotenciaDeDos(16)); // true (2^4)
💡 Explicación: La condición n & (n - 1) === 0 funciona porque las potencias de 2 tienen un solo bit en 1 en binario.

4️⃣ Resolver un Sudoku
📌 Dado un tablero de Sudoku incompleto, completa el tablero correctamente.

js
Copiar
Editar
function resolverSudoku(tablero) {
    function esValido(fila, col, num) {
        for (let i = 0; i < 9; i++) {
            if (tablero[fila][i] === num || tablero[i][col] === num) return false;
            let subFila = Math.floor(fila / 3) * 3 + Math.floor(i / 3);
            let subCol = Math.floor(col / 3) * 3 + (i % 3);
            if (tablero[subFila][subCol] === num) return false;
        }
        return true;
    }

    function resolver() {
        for (let fila = 0; fila < 9; fila++) {
            for (let col = 0; col < 9; col++) {
                if (tablero[fila][col] === 0) {
                    for (let num = 1; num <= 9; num++) {
                        if (esValido(fila, col, num)) {
                            tablero[fila][col] = num;
                            if (resolver()) return true;
                            tablero[fila][col] = 0;
                        }
                    }
                    return false;
                }
            }
        }
        return true;
    }

    resolver();
    return tablero;
}

// Prueba con un Sudoku incompleto
let sudoku = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]
];

console.log(resolverSudoku(sudoku));
💡 Explicación: Usa backtracking para probar y retroceder si un número no es válido.

5️⃣ Encontrar la Intersección de Dos Listas Enlazadas
📌 Dadas dos listas enlazadas, encuentra el nodo donde se cruzan.

js
Copiar
Editar
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function encontrarInterseccion(lista1, lista2) {
    let p1 = lista1, p2 = lista2;
    while (p1 !== p2) {
        p1 = p1 ? p1.next : lista2;
        p2 = p2 ? p2.next : lista1;
    }
    return p1;
}

// Crear nodos de ejemplo
let nodoInterseccion = new ListNode(8);
nodoInterseccion.next = new ListNode(10);

let listaA = new ListNode(3);
listaA.next = new ListNode(7);
listaA.next.next = nodoInterseccion;

let listaB = new ListNode(99);
listaB.next = nodoInterseccion;

console.log(encontrarInterseccion(listaA, listaB)); // Nodo con valor 8
💡 Explicación: Usa dos punteros para recorrer las listas, cambiando a la otra cuando terminan.

