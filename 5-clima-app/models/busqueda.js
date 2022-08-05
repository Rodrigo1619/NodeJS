import axios from 'axios';

class Busqueda{
    historial = ['Soyapango', 'Madrid', 'San Jose']

    constructor(){
        //TODO: leer db si existe
    }

    get paramsMapbox(){
        return {     
            'access_token': process.env.MAPBOX_KEY, //literal se esta usando el token desde el .env
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
}
export default Busqueda