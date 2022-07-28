require('colors');


const { mostrarMenu, pausa } = require('./helpers/mensajes');


console.clear()

const main = async()=>{
    console.log('hola mundo');
    let opt = ''; //iniciamos la variable vacia

    do {
        opt = await mostrarMenu(); //le asignamos a la variable la opcion que vaya a meter el usuario 
        await pausa(); 

    } while (opt !== '0'); //se ejecutara media vez la opcion sea diferente de 0

}

main();