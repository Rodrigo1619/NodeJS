# Server web sin express
Node ya trae incluido un http y se hace se una manera muy similar a que como se hace con express
```
import http from 'http'

http.createServer((req, res)=>{
    res.write('ola camaron sin cola');
    res.end();
})
.listen(8080)
console.log('escuchando en el puerto', 8080)
```
El res.end(); se manda para decirle a la aplicación de que termine como el proceso que esta dentro de esa función, Se observa un **.listen** que es para decirle en que puerto queremos que se levante el servidor, para poder observar si funciona se escribe en el navegador **localhost:8080**

# Escribir en los headers
Para poder hacer los archivos, una manera de hacerse es de la siguiente
```
import http from 'http'

http.createServer((req, res)=>{

    res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    res.writeHead(200, {'Content-Type': 'application/csv'});

    res.write('id, nombre\n')
    res.write('1, Brandon\n')
    res.write('2, Rodrigo\n')
    res.write('3, Molina\n')
    
   // res.write('ola camaron sin cola');
    res.end();
})
.listen(8080)
console.log('escuchando en el puerto', 8080)
```
Esto hace que al recargarse el navegador web se descargue un archivo csv, osea un excel

# Peticion con express
```
import express from 'express'
const app = express()
const port = 8080

app.get('/',  (req, res)=> {
    res.send('ola camaron')
  })
  
  app.listen(8080)

app.get('*',  (req, res)=> {
    res.send('404 pagina no encontrada')
  })
  
  app.listen(port, ()=>{
    console.log(`Corriendo en ${port}`)
})
```
En express podemos poner ese comodin, osea el * para que si el usuario se va a una ruta inexistente llegue a ese ruta predefinida, se puede ver como un **if else**