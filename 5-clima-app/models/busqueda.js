import axios from 'axios';

class Busqueda{
    historial = ['Soyapango', 'Madrid', 'San Jose']

    constructor(){
        //TODO: leer db si existe
    }

    async ciudad(lugar=''){
        //realizar la peticion http
        //console.log('Ciudad de', lugar)
        const resp = await axios.get('https://reqres.in/api/users?page=2')
        console.log(resp.data)
        return[]; //retornar lugares que sean iguales a los que el usuario metio
    }
}
export default Busqueda