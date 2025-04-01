function sonAnagramas(palabra1, palabra2) {
    return palabra1.split("").sort().join("") === palabra2.split("").sort().join("");
}

// Prueba
console.log(sonAnagramas("amor", "roma")); // true
console.log(sonAnagramas("casa", "saco")); // false
