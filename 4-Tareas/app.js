import colors from 'colors';
import {inquirerMenu, inquirerPausa} from './helpers/inquirer.js'; //se opta mejor por usar los import
//const { mostrarMenu, pausa } = require('./helpers/mensajes'); esto era la version anterior


//console.clear()

const main = async()=>{
    console.log('hola mundo');
    let opt = ''; //iniciamos la variable vacia

    do {
        opt = await inquirerMenu() //le asignamos a la variable la opcion que vaya a meter el usuario 
        console.log({opt})
        if(opt !=='0') await inquirerPausa(); //para que el programa cierre de una sola vez

    } while (opt !== '0'); //se ejecutara media vez la opcion sea diferente de 0

}

main();