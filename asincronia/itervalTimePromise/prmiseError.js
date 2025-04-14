const miPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Error en la promesa");
    }, 3000);
  });
  
  miPromesa.catch((error) => {
    console.log(error);
  });
  