import Role from '../models/role.model.js'

const esRolValido = async(rol = '')=>{
    const existeRol = await Role.findOne({rol})
    if(!existeRol){
            throw new Error(`El rol ${rol} no esta registrado en la base de datos`)
    }
}

export{
    esRolValido
}