import axios from 'axios';

class Busqueda{
    historial = ['Soyapango', 'Madrid', 'San Jose']

    constructor(){
        //TODO: leer db si existe
    }

    async ciudad(lugar=''){

        try {
            //realizar la peticion http
            //console.log('Ciudad de', lugar)
            const resp = await axios.get('https://api.mapbox.com/geocoding/v5/mapbox.places/Soyapango%2C%20San%20Salvador%2C%20El%20Salvador.json?proximity=ip&types=place%2Cpostcode%2Caddress&language=es&access_token=pk.eyJ1Ijoicm9kcmljazE2IiwiYSI6ImNsNmZveTdvaTAzMm8zanM1bGp2ZzhicDIifQ.5-JgXdqHa0J97W5Mb5yKrA')
            console.log(resp.data)
            return[]; //retornar lugares que sean iguales a los que el usuario metio
            
        } catch (error) {
            return []
        }
    }
}
export default Busqueda