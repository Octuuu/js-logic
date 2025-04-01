async function procesarTareas(tareas) {
    for (let tarea of tareas) {
        console.log(`Ejecutando tarea de ${tarea} segundos...`);
        await new Promise(res => setTimeout(res, tarea * 1000));
    }
    console.log("Procesamiento finalizado");
}

// Prueba
procesarTareas([2, 3, 1]);
