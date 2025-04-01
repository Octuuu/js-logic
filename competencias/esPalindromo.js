function esPalindromo(palabra) {
    return palabra === palabra.split("").reverse().join("");
}

// Prueba
console.log(esPalindromo("radar")); // true
console.log(esPalindromo("hola"));  // false
