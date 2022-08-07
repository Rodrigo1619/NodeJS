import express from 'express'
import path, { join } from 'path'
const app = express()
const port = 8080
const __dirname = path.resolve()

// Servir contenido estatico
app.use(express.static('public'))

/*app.get('/', (req, res)=> {
    res.send('ola camaron')
})*/
app.get('/ola', (req, res)=>{
    res.send('camaron')
})
app.get('*', (req, res)=> {
    res.sendFile(path.join(__dirname + '/public/404.html'))
})
app.listen(port, ()=>{
    console.log(`Corriendo en ${port}`)
})