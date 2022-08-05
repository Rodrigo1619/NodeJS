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
                if(idSeleccionado==='0') continue //haciendo que si el usuario pone cancelar no se muera la app
                const lugarSel = lugares.find(l=> l.id === idSeleccionado)
                //guardar en db
                busquedas.agregarHistorial(lugarSel.nombre)
                
                //Clima
                const clima = await busquedas.climaLugar(lugarSel.latitud, lugarSel.longitud)
                console.log(clima)

                //Mostrando resultados
                console.clear();
                console.log('\n Información de la ciudad\n'.green)
                console.log('Ciudad:', lugarSel.nombre.yellow)
                console.log('Latitud:', lugarSel.latitud)
                console.log('Longitud:', lugarSel.longitud)
                console.log('Temperatura:', clima.temp)
                console.log('Minima:', clima.min)
                console.log('Maxima:', clima.max)
                console.log('Como esta el clima:', clima.desc.yellow)

                break;
            case 2: busquedas.historialCapitalizado.forEach((lugar, i)=>{
                const idx = `${i+1}.`.green
                console.log(`${idx} ${lugar}`)
            })
                break;
        }
        console.log({opt})

        if(opt !==0) await inquirerPausa();
    } while (opt !== 0);
}
main();