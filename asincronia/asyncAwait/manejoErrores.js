async function obtenerUsuario() {
    try {
      const respuesta = await fetch("https://jsonplaceholder.typicode.com/users/1");
      if (!respuesta.ok) throw new Error("Usuario no encontrado");
      const usuario = await respuesta.json();
      console.log(usuario);
    } catch (error) {
      console.log(error.message);
    }
  }
  
  obtenerUsuario();
  