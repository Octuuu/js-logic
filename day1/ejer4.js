function primeraPeticion(){
    return new Promise((resolve, reject) =>  {
        setTimeout(() => {
            resolve('Primera petición realizada');
        }, 1000);
        
    })
}

function segundaPeticion(){
    return new Promise((resolve, reject) =>  {
        setTimeout(() => {
            reject('Segunda petición realizada');
        }, 2000);
    })
}

primeraPeticion()
    .then(response => {
        console.log(response);
        return segundaPeticion();
    })
    .catch(err => console.error(err));