function hola(nombre, micallback) {
    setTimeout(() => {
        console.log('Hola ' + nombre)
        micallback(nombre);
    }, 1000);
}

function hablar(callbackHablar) {
    setTimeout(() => {
        console.log('Bla bla bla...');
        callbackHablar(); // Se ejecuta el callback
    }, 1000);
}


function adios(nombre, otroCallback) {
    setTimeout(() => {
        console.log('Adios', nombre);
        otroCallback();
    }, 1000);
}

function conversacion(nombre,veces,callback){
    if(veces > 0) {
        hablar(function(){
            conversacion(nombre,--veces,callback);
        })
    }else {
        adios(nombre,callback);
    }
}


//--

console.log('Iniciando proceso...')
hola('Ricardo',function(nombre){
    conversacion(nombre,3,()=>{
        console.log('Proceso terminado')
    });
})


// hola('Ricardo', function (nombre) {
//     hablar(() => {
//         hablar(() => {
//             hablar(() => {
//                 adios(nombre, function () {
//                     console.log('Terminando proceso')
//                 })
//             })

//         })

//     })
// });


