import * as fs from 'fs'
const archivo = './db/data.json'; //donde se creara el archivo

const guardarDB = (data)=>{

    //guardando el archivo y su data
    //JSON.stringify convierte un objeto JSON a un formato JSON string
    fs.writeFileSync(archivo, JSON.stringify(data)); 
}
const leerDB = ()=>{
    //si el archivo no existe que retorne un null
    if(!fs.existsSync(archivo)){
        return null
    }
    //en dado caso ya exista lo leeremos 
    const info = fs.readFileSync(archivo,{encoding: 'utf-8'});
    const data = JSON.parse(info) // JSON.parse es lo contrario a stringify, regresa el string a un objeto
    
    return data //ahora tenemos un arreglo de tareas (se vera en app.js)
}
export{
    guardarDB,
    leerDB
}