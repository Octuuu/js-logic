function caractersMax(s) {
    let set = new Set();
    let maxLength = 0, izquierda = 0;

    for (let derecha = 0; derecha <= s.length; derecha++) {
        while (set.has(s[derecha])){ 
            set.delete(s[izquierda])
            izquierda++;
        }
        set.add(s[derecha])
        maxLength = Math.max(maxLength, derecha - izquierda + 1)
    }
    return maxLength;
}

console.log(caractersMax('abcabcbb'))

/*
*/
// Encontrar la Subcadena Más Larga Sin Repeticiones
//📌 Dado un string, encuentra la longitud de la subcadena más larga sin caracteres repetidos.