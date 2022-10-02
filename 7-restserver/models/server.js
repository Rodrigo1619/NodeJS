import express from 'express';
//clase para poder que nuestra app de express este trabajando en una carpeta diferende del app.js
class Server{
    constructor(){
        //delcarando las variables
        this.app = express();
        this.port = process.env.PORT;

        //mandamos a llamar el metodo de routes
        this.routes();
    }
    //creamos el metodo para las rutas
    routes(){
        //el app.get no existe, pero tenemos acceso al this.app.get 
        this.app.get('/', (req,res)=>{
            res.send('Ola camaron sin cola');
        });
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log('Servidor corriendo en el puerto ', this.port);
        });
    }
}

export default Server;