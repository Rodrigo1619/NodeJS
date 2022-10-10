import {request,response} from 'express';
import bcryptjs from 'bcryptjs';
import Usuario from '../models/usuario.model.js';

const usuariosGet = (req=request,res = response)=>{
    const {q, nombre = 'no name', apikey, page=1, limit} = req.query;//para extraer la info del params pero que es opcional, los que van despues del ?
    //res.send('Ola camaron sin cola'); cambiamos el send por json para no mandar un html sino un archivo en formato json se hace la peticion en postman con la url
    res.json({
        msg: 'get API - controller',
        q,
        nombre,
        apikey,
        page,
        limit
    });
}
const usuariosPost = async(req,res = response)=>{

    //extraer el body //const body = req.body; forma normal
    //const {nombre, edad} = req.body //con desestructuracion
    const {nombre, correo, contraseña, rol} = req.body
    const usuario = new Usuario({nombre, correo, contraseña, rol}); //instanciamos un nuevo usuario
    
    //encriptando contraseña
    const salt = bcryptjs.genSaltSync(); //es cuantas vueltas le queremos dar a la contraseña para que sea dificil descencriptarla, por defecto esta en 10
    usuario.contraseña = bcryptjs.hashSync(contraseña, salt) //nos pide la contraseña y el numero de saltos

    //esto hace que se guarde en la base de datos de mondongo
    await usuario.save(); 

    res.json({
        //msg: 'post API - controller',
        usuario
    });
}
const usuariosPut = (req,res=response)=>{  
    const {id} = req.params
    res.json({
        msg: 'put API - controller',
        id
    });
}
const usuariosPatch = (req,res = response)=>{
    res.json({
        msg: 'patch API'
    });
}
const usuariosDelete = (req,res=response)=>{
    res.json({
        msg: 'delete API - controller'
    });
}


export {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}