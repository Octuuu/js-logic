async function obtenerDatos() {
    try {
        const respuesta = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        if (!respuesta.ok) {
            throw new Error('Error en la respuesta de la API');
        }
        const datos = await respuesta.json();
        console.log(datos);
    } catch (error) {
        console.error('Hubo un error:', error);
    }
}


/*
async function obtenerDatos() {
    try {
        const respuesta = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        if (!respuesta.ok) {
            throw new Error("Error en la respuesta de la API");
        }
        const datos = await respuesta.json();
        console.log(datos);
    } catch (error) {
        console.error("Hubo un error:", error);
    }
}

obtenerDatos();


*/