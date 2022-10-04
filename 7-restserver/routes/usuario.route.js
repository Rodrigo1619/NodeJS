import {Router} from 'express';

export const router = Router();
 
        //debemos cambiar el ('/') porque el middleware ya lo esta usando
        router.get('/', (req,res)=>{
            //res.send('Ola camaron sin cola'); cambiamos el send por json para no mandar un html sino un archivo en formato json se hace la peticion en postman con la url
            res.json({
                msg: 'get API'
            });
        });
        router.put('/', (req,res)=>{  
            res.json({
                msg: 'put API'
            });
        });
        router.post('/', (req,res)=>{
            res.json({
                msg: 'post API'
            });
        });
        router.delete('/', (req,res)=>{
            res.json({
                msg: 'delete API'
            });
        });
        router.patch('/', (req,res)=>{
            res.json({
                msg: 'patch API'
            });
        });
