import * as fs from 'fs'
const guardarDB = (data)=>{
    const archivo = './db/data.json'; //donde se creara el archivo

    //guardando el archivo y su data
    //JSON.stringify convierte un objeto JSON a un formato JSON string
    fs.writeFileSync(archivo, JSON.stringify(data)); 
}
export{
    guardarDB
}