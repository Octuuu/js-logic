function mayor(arr){
    for (let i = 1; i < arr.length - 1; i++){
        if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]){
            return arr[i];
        }
    }
}

console.log(mayor([1, 3, 7, 8, 6, 4, 2]));
/*
Encontrar el Elemento "Pico" en un Array
📌 Encuentra un elemento que sea mayor que sus vecinos en un array.
*/
