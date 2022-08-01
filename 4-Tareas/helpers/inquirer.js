import inquirer from 'inquirer';
import colors from 'colors';
import Tareas from '../models/tareas.js';

const preguntas = [
    {
        type:'list',
        name: 'opcion',
        message: '¿Qué desea hacer?',
        choices: [
            {
                value: '1',
                name: `${'1'.green}. Crear tarea`
            },
            {
                value: '2',
                name: `${'2'.green}. Listar tareas`
            },
            {
                value: '3',
                name: `${'3'.green}. Listar tareas completadas`
            },
            {
                value: '4',
                name: `${'4'.green}. Listar tareas pendientes`
            },
            {
                value: '5',
                name: `${'5'.green}. Completar tarea(s)`
            },
            {
                value: '6',
                name: `${'6'.green}. Borrar tarea`
            },
            {
                value: '0',
                name: `${'0'.green}. Salir`
            },
        ]
    }
]
const inquirerMenu = async() =>{
    console.clear();
    console.log('=========================='.green)
    console.log(' Seleccione una opción '.green)
    console.log('==========================\n'.green)
    
    const {opcion} = await inquirer.prompt(preguntas) // es como el question
    return opcion
}
const inquirerPausa = async()=>{

    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Presione ${'ENTER'.green} para continuar`

        }
    ]
    console.log('\n')
    await inquirer.prompt(question)
}
const leerInput = async(message)=>{        //al poner message a la hora de ponerlo en el objeto se puede poner
                                           //solo message porque message : message es redundante
    const question = [
        {
            type: 'input',
            name: 'desc', //descripcion
            message,
            validate(value){
                if(value.length === 0){
                    return 'Por fita ingrese un valor'
                }
                return true
            }
        }
    ];

    const {desc} = await inquirer.prompt(question)
    return desc
}

const listadoTareasBorrar = async(tareas = [])=>{
    //creando nuevo arreglo para no modificar el original
    const choices = tareas.map((tarea, i) =>{
        const idx = `${i+1}.`.green
        return{
            value: tarea.id,
            name: `${idx} ${tarea.descripcion}`

        }
    })
    //agregando opcion de cancelar por si el usuario no quiere eliminar una tarea
    choices.unshift({
        value: '0',
         name: `${'0.'.green} Cancelar`
    })
    //arreglo para poder seleccionar en el nuevo menu de borrar
    const preguntas = [
        {
            type: 'list',
            name: 'id',
            message: 'borrar',
            choices
        }
    ]
    const {id} = await inquirer.prompt(preguntas)
    return id 
}
const confirmar = async(message)=>{
    const question = [
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ]
    const {ok} = await inquirer.prompt(question)
    return ok

}
const mostrarListadoChecklList = async(tareas = [])=>{
    //creando nuevo arreglo para no modificar el original
    const choices = tareas.map((tarea, i) =>{
        const idx = `${i+1}.`.green
        return{
            value: tarea.id,
            name: `${idx} ${tarea.descripcion}`,
            checked: (tarea.completadoEn)? true : false
        }
    })
    
    //arreglo para poder seleccionar en el nuevo menu de borrar
    const pregunta = [
        {
            type: 'checkbox',
            name: 'ids',
            message: 'Selecciones',
            choices
        }
    ]
    const {ids} = await inquirer.prompt(pregunta)
    return ids
}
export{
    inquirerMenu,
    inquirerPausa,
    leerInput,
    listadoTareasBorrar,
    confirmar,
    mostrarListadoChecklList
}