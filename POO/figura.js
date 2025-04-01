class Figura {
    area() {
        throw new Error("Método no implementado");
    }
}

class Cuadrado extends Figura {
    constructor(lado) {
        super();
        this.lado = lado;
    }

    area() {
        return this.lado ** 2;
    }
}

class Circulo extends Figura {
    constructor(radio) {
        super();
        this.radio = radio;
    }

    area() {
        return Math.PI * this.radio ** 2;
    }
}

// Prueba
const cuadrado = new Cuadrado(4);
console.log(cuadrado.area()); // 16

const circulo = new Circulo(3);
console.log(circulo.area()); // 28.27
