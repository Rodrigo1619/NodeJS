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