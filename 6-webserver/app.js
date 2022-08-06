import http from 'http'

http.createServer((req, res)=>{
    res.write('ola camaron sin cola');
    res.end();
})
.listen(8080)
console.log('escuchando en el puerto', 8080)