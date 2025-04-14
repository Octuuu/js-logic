const axios = require("axios");

async function obtenerPosts() {
  try {
    const respuesta = await axios.get("https://jsonplaceholder.typicode.com/posts");
    console.log(respuesta.data);
  } catch (error) {
    console.log("Error:", error.message);
  }
}

obtenerPosts();
