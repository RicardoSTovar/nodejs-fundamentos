const fs = require('fs');

function leer(ruta, cb) {
    fs.readFile(ruta,(err,data)=>{
       cb(data.toString())
    })
}

function escribir(ruta,contenido,cb){
    fs.writeFile(ruta,contenido,function(err){
        if(err){
            console.error('No he podido escribir',err)
        } else {
            console.log('Se ha escrito correctamente')
        }
    })
}

function borrar (ruta,cb){
    fs.unlink(ruta,cb);
}


// async function escribir(path,contenido){
//     try {
//         await fs.writeFile(path,contenido);
//     } catch (error) {
//         console.error(error)
//     }
// }



//escribir(__dirname + '/archivo.txt', 'Soy un archivo nuevo')
//leer(__dirname + '/archivo.txt',console.log)
//borrar(__dirname + "/archivo.txt",console.log)