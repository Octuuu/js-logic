let contador = 10;
const intervalo = setInterval(() => {
  console.log(contador);
  contador--;
  if (contador < 0) {
    clearInterval(intervalo);
  }
}, 1000);
