async function obtenerPost() {
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/posts/3");
    const post = await respuesta.json();
    console.log(post);
  }
  
  obtenerPost();
  