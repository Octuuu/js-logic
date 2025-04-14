const axios = require("axios");

async function crearPost() {
  try {
    const respuesta = await axios.post("https://jsonplaceholder.typicode.com/posts", {
      title: "Nuevo Post",
      body: "Este es el contenido del nuevo post",
      userId: 1,
    });
    console.log(respuesta.data);
  } catch (error) {
    console.log("Error:", error.message);
  }
}

crearPost();
