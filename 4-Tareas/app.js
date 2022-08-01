import colors from 'colors';
import { guardarDB, leerDB } from './helpers/guardarArchivo.js';
import {inquirerMenu, inquirerPausa, leerInput, listadoTareasBorrar, confirmar, mostrarListadoChecklList} from './helpers/inquirer.js'; 
import Tarea from './models/tarea.js';
import Tareas from './models/tareas.js';
//const { mostrarMenu, pausa } = require('./helpers/mensajes'); esto era la version anterior ahora es mejor usar import


console.clear()

const main = async()=>{
    let opt = ''; //iniciamos la variable vacia
    const tareas = new Tareas();
    const tareasDB = leerDB();

    if(tareasDB){
        tareas.cargarTareasFromArray(tareasDB)
    }
    do {
        opt = await inquirerMenu();
        
        switch (opt) {
            case '1':
                const desc = await leerInput('Descripcion: ');
                tareas.crearTarea(desc)
                break;
            case '2':
                tareas.ListadoCompleto()
                break;
            case '3':
                tareas.ListarPendientesCompletadas(true)
                break;
            case '4':
                tareas.ListarPendientesCompletadas(false)
                break;
            case '5':
                const ids = await mostrarListadoChecklList(tareas.listadoArr)
                tareas.toggleCompletadas(ids)
                break;
            case '6':
                    const id = await listadoTareasBorrar(tareas.listadoArr)
                    if(id !== '0'){

                        const ok = await confirmar('¿Tas seguro?')
                        if(ok){
                            tareas.borrarTarea(id)
                            console.log('Tarea eliminada correctamente')
                        }
                    }
                break;
        }
        guardarDB(tareas.listadoArr) //estamos guardando el arreglo de la lista de tareas
        if(opt !=='0') await inquirerPausa(); //para que el programa cierre de una sola vez

    } while (opt !== '0'); //se ejecutara media vez la opcion sea diferente de 0


}

main();