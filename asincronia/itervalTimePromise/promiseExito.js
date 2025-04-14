const miPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promesa resuelta");
    }, 2000);
  });
  
  miPromesa.then((mensaje) => {
    console.log(mensaje);
  });
  