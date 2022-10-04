# No olvidar
Ahora se utiliza el import y no require, entonces para que esto agarrre debemos ir al package.json y 
escribir lo siguiente en el primer corchete
```
"type": "module",
```
Quedando nuestro package json inicial de la siguiente manera
```
{
  "name": "7-restserver",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "type": "module",
```

# configurar el .env
Se usara para el puerto 8080

# ¿Qué es middleware?
Los middlewares no son más que funciones que añadiran más funcionalidades a nuestro web server o en otras palabras es una función que siempre va a ejecutarse siempre que levantemos nuestro servidor

# Cors
Es lo que nos ayuda a proteger nuestro server de forma "superficial"

# Version anterior de los routes cuando estaban en server.js
```
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
```

# Acciones en postman
Para hacer las "comunicaciones" con el post, se selecciona el endpoint en tipo POST, de ahi nos vamos a body y en body seleccionamos raw y elegimos JSON