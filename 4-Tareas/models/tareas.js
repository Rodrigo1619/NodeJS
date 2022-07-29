import Tarea from "./tarea.js";

class Tareas{
    _listado = {};
    get listadoArr(){ //setters y getters que use en c#
        const listado = [];
        Object.keys(this._listado).forEach(key => {
            const tarea = this._listado[key];
            listado.push(tarea)
        })
        return listado;
    }
    constructor(){
        this._listado = {};
    }

    crearTarea(descripcion = ''){
        const tarea = new Tarea(descripcion);
        this._listado[tarea.id] = tarea;
    }
}
export default Tareas