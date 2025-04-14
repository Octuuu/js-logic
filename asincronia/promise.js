function saludar(nombre) {
    return new Promise((resolve, reject) => {
        if (nombre) {
            resolve(`Hola, ${nombre}!`);
        } else {
            reject("No se proporcionó un nombre.");
        }
    })
}

saludar("Octa")
    .then(mensaje => console.log(mensaje))
    .catch(error => console.error(error));