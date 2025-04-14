function retraso(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function esperar() {
    console.log("Espera...");
    await retraso(3000);
    console.log("¡Terminó!");
  }
  
  esperar();
  