import axios from 'axios';

class Busqueda{
    historial = ['Soyapango', 'Madrid', 'San Jose']

    constructor(){
        //TODO: leer db si existe
    }

    get paramsMapbox(){
        return {     
            'access_token': 'pk.eyJ1Ijoicm9kcmljazE2IiwiYSI6ImNsNmZveTdvaTAzMm8zanM1bGp2ZzhicDIifQ.5-JgXdqHa0J97W5Mb5yKrA',
            'limit': 5,
            'language': 'es'
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
            console.log(resp.data)
            return[]; //retornar lugares que sean iguales a los que el usuario metio
            
        } catch (error) {
            return []
        }
    }
}
export default Busqueda