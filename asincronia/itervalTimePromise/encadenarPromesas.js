const promesa1 = new Promise((resolve) => {
    setTimeout(() => resolve(5), 1000);
  });
  
  promesa1
    .then((resultado) => {
      console.log(resultado); // 5
      return resultado * 2;
    })
    .then((nuevoResultado) => {
      console.log(nuevoResultado); // 10
    });
  