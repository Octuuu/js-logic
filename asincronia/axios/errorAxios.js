const axios = require("axios");

async function obtenerDatosIncorrectos() {
  try {
    const respuesta = await axios.get("https://jsonplaceholder.typicode.com/incorrectEndpoint");
  } catch (error) {
    console.log("Error:", error.message);
  }
}

obtenerDatosIncorrectos();
