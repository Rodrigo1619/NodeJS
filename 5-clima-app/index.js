import 'dotenv/config'
import { inquirerMenu, inquirerPausa, leerInput, listarLugares} from "./helpers/inquirer.js";
import Busqueda from "./models/busqueda.js";

const main = async()=>{
    let opt = '';
    const busquedas = new Busqueda();
    do {
        opt = await inquirerMenu();
        switch(opt){
            case 1:

                //Mostrar mensaje
                const termino = await leerInput('Ciudad: ');
                //Buscar lugares
                const lugares = await busquedas.ciudad(termino) //termino de busqueda
                //Seleccionar el lugar
                const idSeleccionado = await listarLugares(lugares);
                const lugarSel = lugares.find(l=> l.id === idSeleccionado)
                
                console.log('\n Información de la ciudad\n'.green)
                console.log('Ciudad:', lugarSel.nombre)
                console.log('Latitud:', lugarSel.latitud)
                console.log('Longitud:', lugarSel.longitud)
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