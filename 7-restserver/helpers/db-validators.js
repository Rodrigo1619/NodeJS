import Role from '../models/role.model.js'
import Usuario from '../models/usuario.model.js'

//validando si es un rol que ya esta establecido en la base de datos
const esRolValido = async(rol = '')=>{
    const existeRol = await Role.findOne({rol})
    if(!existeRol){
            throw new Error(`El rol ${rol} no esta registrado en la base de datos`)
    }
}
//validando si el correo ya existe
const emailExiste = async(correo = '')=>{
    const emailExistente = await Usuario.findOne({correo}) //encuentra si un correo se repite de los que el usuario mande
    if(emailExistente){
        throw new Error(`El correo ${correo} ya ha sido tomado, intenta con otro`)
    }
}

export{
    esRolValido,
    emailExiste
}