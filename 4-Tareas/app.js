import colors from 'colors';
import { guardarDB } from './helpers/guardarArchivo.js';
import {inquirerMenu, inquirerPausa, leerInput} from './helpers/inquirer.js'; 
import Tarea from './models/tarea.js';
import Tareas from './models/tareas.js';
//const { mostrarMenu, pausa } = require('./helpers/mensajes'); esto era la version anterior ahora es mejor usar import


console.clear()

const main = async()=>{
    let opt = ''; //iniciamos la variable vacia
    const tareas = new Tareas();

    do {
        opt = await inquirerMenu();
        
        switch (opt) {
            case '1':
                const desc = await leerInput('Descripcion: ');
                tareas.crearTarea(desc)
                break;
        
            case '2':
                console.log(tareas.listadoArr)
                break;
        }

        //guardarDB(tareas.listadoArr) //estamos guardando el arreglo de la lista de tareas
        if(opt !=='0') await inquirerPausa(); //para que el programa cierre de una sola vez

    } while (opt !== '0'); //se ejecutara media vez la opcion sea diferente de 0


}

main();