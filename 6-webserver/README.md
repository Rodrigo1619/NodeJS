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