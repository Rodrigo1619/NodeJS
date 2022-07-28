const { resolve } = require('path');

require('colors');

const mostrarMenu = ()=>{

    return new Promise(resolve=>{
        console.clear();

        console.log('=========================='.green)
        console.log(' Seleccione una opción '.green)
        console.log('==========================\n'.green)
    
        console.log(`${'1'.green}. Crear una tarea`);
        console.log(`${'2'.green}. Listar tareas`);
        console.log(`${'3'.green}. Listar tareas completadas`);
        console.log(`${'4'.green}. Listar tareas pendientes`);
        console.log(`${'5'.green}. Completar tarea(s)`);
        console.log(`${'6'.green}. Borrar tarea`);
        console.log(`${'0'.green}. Salir\n`);
    
        const readline = require('readline').createInterface({
            input: process.stdin, 
            output: process.stdout
        });
        readline.question('Seleccione una opción: ', (opt)=>{ //opt solo es el nombre que le damos, opt es de option
            readline.close();
            resolve(opt); //aqui es donde se resuleve la promesa con la opcion seleccionada por el usuario
        })
    })
}
const pausa = ()=>{
    return new Promise(resolve=>{
        const readline = require('readline').createInterface({
            input: process.stdin, 
            output: process.stdout
        });
        readline.question(`Presione ${'ENTER'.green} para continuar`, (opt)=>{ //opt solo es el nombre que le damos, opt es de option
            readline.close();
            resolve(); //no mandamos parametro porque no necesitamos nada de lo que la persona escriba
        })
    })
}
module.exports ={
    mostrarMenu,
    pausa
}