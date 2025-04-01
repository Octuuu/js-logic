function convertirBases(n) {
    return {
        binario: n.toString(2),
        octal: n.toString(8),
        hexadecimal: n.toString(16).toUpperCase()
    };
}

console.log(convertirBases(255)); // { binario: '11111111', octal: '377', hexadecimal: 'FF' }
console.log(convertirBases(100)); // { binario: '1100100', octal: '144', hexadecimal: '64' }

/*
Convertir un número decimal a binario, octal y hexadecimal.
*/