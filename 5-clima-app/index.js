import { inquirerMenu, inquirerPausa, leerInput} from "./helpers/inquirer.js";
import Busqueda from "./models/busqueda.js";

const main = async()=>{
    let opt = '';
    const busquedas = new Busqueda();
    do {
        opt = await inquirerMenu();
        switch(opt){
            case 1:

                //Mostrar mensaje
                const lugar = await leerInput('Ciudad: ');
                await busquedas.ciudad(lugar)




                console.log('\n Información de la ciudad\n'.green)
                console.log('Ciudad:')
                console.log('Latitud:')
                console.log('Longitud:')
                console.log('Temperatura:')
                console.log('Minima:')
                console.log('Maxima:')
                break;
        }
        console.log({opt})

        if(opt !==0) await inquirerPausa();
    } while (opt !== 0);
}
main();