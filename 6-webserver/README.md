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

# Directorio public
En el curso sale una manera "antigua" de hacerla, pero en este caso se pudo resolver haciendo uso del path de la siguiente manera.
```
import path, { join } from 'path'
const __dirname = path.resolve()
app.get('*', (req, res)=> {
    res.sendFile(path.join(__dirname + '/public/404.html'))
})
```
## Forma antigua
```
app.get('*', (req, res)=> {
    res.sendFile(__dirname + '/public/404.html')
})
```
El error que sale es que __dirname no esta definido.
Por lo tanto se tiene que recurrir a las importaciones del path como se observa en el caso anterior

# Render
Se puede "atrapar" cosas del controller en la vista
### app.js
```
app.get('/',(req, res)=>{
    res.render('home',{
        nombre: 'Rodrigo',
        titulo: 'curso de node'
    })
})
```
### home.hbs 
ahi solamente podemos mandar a llamar caracteristicas de un objeto, metiendolo en doble llaves
```
<html>
	<head>
		<title>{{titulo}} </title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<link rel="stylesheet" href="assets/css/main.css" />
	</head>
```
y el resultado de eso seria curso de node que es el que le pusimos al titulo en el controller

# Creacion de más archivos
Creamos un directorio llamado partials y adentro creamos un archivo con el nombre que deseamos y en el home.hbs mandamos a llamarlo con ``` {{> nombreArchivo}}```
# Reinicio
Si al hacer cambios la pagina web tira un error, solamente bajamos el servidor y lo volvemos a ejecutar debido a que node solo acepta los cambios de .js 