class Usuario {
    #password;

    constructor(username, password) {
        this.username = username;
        this.#password = password;
    }

    validarPassword(password) {
        return this.#password === password;
    }
}

// Prueba
const usuario = new Usuario("admin", "secreto123");
console.log(usuario.validarPassword("secreto123")); // true
console.log(usuario.validarPassword("123456"));     // false
