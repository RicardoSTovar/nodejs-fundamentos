function hola(nombre) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log('Hola ' + nombre)
            resolve(nombre);
        }, 1000);
    });

}

function hablar(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Bla bla bla...');
            resolve(nombre);
        }, 1000);
    });

}


function adios(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Adios', nombre);
            resolve();
        }, 1000);
    });

}


async function main(){
    let nombre = await hola('Ricardo');
    await hablar();
    await hablar();
    await hablar();
    await hablar();
    await hablar();
    await adios(nombre)
    console.log('Termina el proceso')
}

console.log('Empezamos el proceso');
main()
console.log('Sera la segunda linea que se ejecute');