let nombre = process.env.NOMBRE || 'Sin nombre'; //Variables de entorno por defecto van en mayusculas
let web = process.env.MI_WEB || 'No tengo Web';

console.log('Hola ' + nombre)
console.log('Mi web es ' + web);
console.log('Soy desarrollador de software')



//Utilerias
//nodemon para desarrollo
// pm2