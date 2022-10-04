import express from 'express';
import cors from 'cors';
import {router} from '../routes/usuario.route.js'
//clase para poder que nuestra app de express este trabajando en una carpeta diferende del app.js
class Server{
    constructor(){
        //delcarando las variables
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/camaron/usuarios';

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
        this.app.use(this.usuariosPath, router)
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log('Servidor corriendo en el puerto ', this.port);
        });
    }
    
}

export default Server;