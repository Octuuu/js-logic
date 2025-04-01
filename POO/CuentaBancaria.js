class CuentaBancaria {
    constructor(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }

    depositar(monto) {
        if (monto > 0) this.saldo += monto;
    }

    retirar(monto) {
        if (monto > 0 && monto <= this.saldo) {
            this.saldo -= monto;
        } else {
            console.log("Fondos insuficientes");
        }
    }

    getSaldo() {
        return this.saldo;
    }
}

// Prueba
const cuenta = new CuentaBancaria("Juan", 1000);
cuenta.depositar(500);
cuenta.retirar(300);
console.log(cuenta.getSaldo()); // 1200


/*
 Crea una clase CuentaBancaria que permita depositar, retirar y consultar el saldo.
*/