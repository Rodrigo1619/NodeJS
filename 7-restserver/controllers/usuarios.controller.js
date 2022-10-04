import {request,response} from 'express';

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
const usuariosPost = (req,res = response)=>{

    //extraer el body
    //const body = req.body; forma normal
    //destructurando
    const {nombre, edad} = req.body
    res.json({
        msg: 'post API - controller',
        nombre,
        edad
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