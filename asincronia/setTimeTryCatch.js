setTimeout(function() {
    try {
        // Simula un error
        throw new Error("Algo salió mal en el setTimeout");
    } catch (error) {
        console.error(error.message); // Algo salió mal en el setTimeout
    }
}, 1000);
