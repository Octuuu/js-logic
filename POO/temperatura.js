class Temperatura {
    constructor(celsius) {
        this._celsius = celsius;
    }

    get celsius() {
        return this._celsius;
    }

    set celsius(valor) {
        this._celsius = valor;
    }

    get fahrenheit() {
        return this._celsius * 9/5 + 32;
    }

    set fahrenheit(valor) {
        this._celsius = (valor - 32) * 5/9;
    }
}

// Prueba
const temp = new Temperatura(25);
console.log(temp.fahrenheit); // 77°F
temp.fahrenheit = 98.6;
console.log(temp.celsius); // 37°C
