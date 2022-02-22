function hola(nombre, micallback) {
    setTimeout(() => {
        console.log('Hola ' + nombre)
        micallback(nombre);
    }, 1000);
}

function adios(nombre, otroCallback) {
    setTimeout(() => {
        console.log('Adios', nombre);
        otroCallback();
    }, 1000);
}

console.log('Iniciando proceso...')
hola('Ricardo', function (nombre) {
    adios(nombre, function () {
        console.log('Terminando proceso')
    })
});




// Una función de callback es una función que se pasa a otra función como un argumento,
//que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción.