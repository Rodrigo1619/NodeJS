import {response} from 'express';

const usuariosGet = (req,res = response)=>{
    //res.send('Ola camaron sin cola'); cambiamos el send por json para no mandar un html sino un archivo en formato json se hace la peticion en postman con la url
    res.json({
        msg: 'get API - controller'
    });
}
const usuariosPost = (req,res = response)=>{
    res.json({
        msg: 'post API - controller'
    });
}
const usuariosPut = (req,res=response)=>{  
    res.json({
        msg: 'put API - controller'
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