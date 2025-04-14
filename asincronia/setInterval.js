let contador = 0;
const intervalo = setInterval(function() {
    console.log(`Contador: ${contador}`);
    contador++;
    if (contador === 5) {
        clearInterval(intervalo); // Detener el intervalo después de 5 repeticiones
    }
}, 1000); // 1000 ms = 1 segundo
