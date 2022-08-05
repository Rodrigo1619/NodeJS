import inquirer from 'inquirer';

import colors from 'colors';


const preguntas = [
    {
        type:'list',
        name: 'opcion',
        message: '¿Qué desea hacer?',
        choices: [
            {
                value: 1,
                name: `${'1'.green}. Buscar ciudad`
            },
            {
                value: 2,
                name: `${'2'.green}. Historial`
            },
            {
                value: 0,
                name: `${'0'.green}. Salir`
            }
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
const leerInput = async( message ) => {

    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate( value ) {
                if( value.length === 0 ) {
                    return 'Por favor ingrese un valor';
                }
                return true;
            }
        }
    ];

    const { desc } = await inquirer.prompt(question);
    return desc;
}


export{
    inquirerMenu,
    inquirerPausa,
    leerInput
    
}