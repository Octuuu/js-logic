const axios = require('axios'); // Importa Axios

async function obtenerPost() {
    try {
        const respuesta = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
        console.log(respuesta.data);
    } catch (error) {
        console.error("Error al obtener los datos", error);
    }
}

obtenerPost();
