import express from 'express';
import cors from 'cors';
//clase para poder que nuestra app de express este trabajando en una carpeta diferende del app.js
class Server{
    constructor(){
        //delcarando las variables
        this.app = express();
        this.port = process.env.PORT;

        //Middelwares
        this.middlewares();
        //Rutas
        //mandamos a llamar el metodo de routes
        this.routes();
    }
    //creando nuestros middlewares
    middlewares(){
        //use es para saber que es un middleware y el express.static es para decir que carpeta estatica
        //usar, en este caso sera la carpeta public, recordar que al hacer esto se hace con la ruta raiz('/')
        this.app.use(express.static('public'));

        //Cors
        this.app.use(cors());
    }
    //creamos el metodo para las rutas
    routes(){
        //el app.get no existe, pero tenemos acceso al this.app.get 
        //debemos cambiar el ('/') porque el middleware ya lo esta usando
        this.app.get('/camaron', (req,res)=>{
            //res.send('Ola camaron sin cola'); cambiamos el send por json para no mandar un html sino un archivo en formato json se hace la peticion en postman con la url
            res.json({
                msg: 'get API'
            });
        });
        this.app.put('/camaron', (req,res)=>{  
            res.json({
                msg: 'put API'
            });
        });
        this.app.post('/camaron', (req,res)=>{
            res.json({
                msg: 'post API'
            });
        });
        this.app.delete('/camaron', (req,res)=>{
            res.json({
                msg: 'delete API'
            });
        });
        this.app.patch('/camaron', (req,res)=>{
            res.json({
                msg: 'patch API'
            });
        });
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log('Servidor corriendo en el puerto ', this.port);
        });
    }
    
}

export default Server;