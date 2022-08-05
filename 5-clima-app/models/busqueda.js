import * as fs from 'fs'
import axios from 'axios';

class Busqueda{
    historial = []
    dbPath = './db/database.json'

    constructor(){
        //TODO: leer db si existe
        this.leerDB()
    }
    get historialCapitalizado(){
        return this.historial.map(lugar=>{
            let palabra = lugar.split(' ')
            palabra = palabra.map(p => p[0].toUpperCase() + p.substring(1));

            return palabra.join(' ')
        })
    }

    get paramsMapbox(){
        return {     
            'access_token': process.env.MAPBOX_KEY, //literal se esta usando el token desde el .env
            'limit': 5,
            'language': 'es'
        }
    }
    get paramsOpenWether(){
        return{
            appid: process.env.OPENWEATHER_KEY,
            units: 'metric',
            lang: 'es'

        }
    }

    async ciudad(lugar=''){

        try {
            //realizar la peticion http
            // asi se tenia antes de hacer cambios la url https://api.mapbox.com/geocoding/v5/mapbox.places/Madrid.json?types=place&language=es&access_token=YOUR_MAPBOX_ACCESS_TOKEN

            const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
                params: this.paramsMapbox
            })
            const resp = await instance.get();

            //de donde se extraera la informacion
            return resp.data.features.map(lugar => ({
                id: lugar.id,
                nombre: lugar.place_name,
                longitud: lugar.center[0] , //es un arreglo y nos interesa la primera posicion
                latitud: lugar.center[1] //lo mismo, es un arreglo compartido y nos interesa la segunda posicion
            }))
            
        } catch (error) {
            return []
        }
    }

    async climaLugar(lat, lon){
        try {
            const instance = axios.create({
                baseURL: `https://api.openweathermap.org/data/2.5/weather`,
                params: {...this.paramsOpenWether, lat, lon} //desestructurando el getter
            })
            const resp = await instance.get();
            const {weather, main} = resp.data

            return{
                desc: weather[0].description, //la description es un arreglo
                min: main.temp_min,
                max: main.temp_max,
                temp: main.temp
            }
        } catch (error) {
            console.log(error)
        }
    }

    agregarHistorial(lugar = ''){
        if(this.historial.includes(lugar.toLocaleLowerCase())){
            return; //solo retorna porque no tiene que grabar nada
        }
        //que solo sean 6 en el historial
        this.historial = this.historial.splice(0,5)
        //TODO: prevenir duplicidad
        this.historial.unshift(lugar.toLocaleLowerCase())

        //grabar en la db
        this.guardarDB()
    }
    guardarDB(){
        //esto es por si se tuvieran muchos archivos por guardar en la db
        const payload={
            historial: this.historial
        }
        fs.writeFileSync(this.dbPath, JSON.stringify(payload))
    }
    leerDB(){
        //si el archivo no existe retornara un null
        if(!fs.existsSync(this.dbPath)){
            return
        }
        //pero si existe
        const info = fs.readFileSync(this.dbPath, {encoding: 'utf-8'})
        const data = JSON.parse(info)
        this.historial = data.historial
    }
}
export default Busqueda