const fs = require('fs')
const crearArchivo = async(base = 5)=>{

    try {
        let salida = ''

    for(let i = 0; i<=10; i++){
        salida += `${base} x ${i} = ${base*i}\n`
    }
    console.log(salida)

    fs.writeFileSync(`tabla-${base}.txt`, salida)

    return(`tabla del ${base}.txt creada`)
    } catch (error) {
        throw error
    }
    
}

module.exports = {
    crearArchivo
}