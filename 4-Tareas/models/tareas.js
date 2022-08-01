import Tarea from "./tarea.js";

class Tareas{
    _listado = {
        'abc':123
    };


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
    borrarTarea(id = ''){
        if (this._listado[id]){
            delete this._listado[id]
        }
    }

    cargarTareasFromArray( tareas = [] ) {
        
        tareas.forEach( tarea => {
            this._listado[tarea.id] = tarea;
        });
    }


    crearTarea(descripcion = ''){
        const tarea = new Tarea(descripcion);
        this._listado[tarea.id] = tarea;
    }
    ListadoCompleto(){
        this.listadoArr.forEach((tarea,i) =>{ //i de indice, osea el numero
            const idx = `${i+1}`.green
            const {descripcion, completadoEn} = tarea;
            const estado = (completadoEn) ? 'Completada'.green : 'Pendiente'.red
            console.log(`${idx} ${descripcion} :: ${estado}`)
        })
    }
    ListarPendientesCompletadas(Completadas = true){

        let contador = 0;
        this.listadoArr.forEach(tarea =>{ //i de indice, osea el numero
            const {descripcion, completadoEn} = tarea;
            const estado = (completadoEn) ? 'Completada'.green : 'Pendiente'.red
            if(Completadas){

                if(completadoEn){
                    contador+=1;
                    console.log(`${(contador + '.').green} ${descripcion} :: ${completadoEn.green}`)
                }
            }else{
                
                if(!completadoEn){
                    contador+=1;
                    console.log(`${(contador + '.').green} ${descripcion} :: ${estado}`)
                }
            }
        })
    }
    toggleCompletadas(ids = []){
        ids.forEach(id =>{
            const tarea = this._listado[id]
            if(!tarea.completadoEn){
                tarea.completadoEn = new Date().toISOString()
            }
        })

      
    }

}
export default Tareas