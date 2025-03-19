function sumaUnicos(arr) {
    return arr.filter(num => arr.indexOf(num) === arr.lastIndexOf(num))
              .reduce((acc, num) => acc + num, 0);
}

console.log(sumaUnicos([4, 5, 7, 5, 4, 8])); // 15 (7 + 8)


/*
1️⃣ Sumar los números que no se repiten en un array
📌 Descripción: Dado un array de números, suma solo los que aparecen una vez.
*/