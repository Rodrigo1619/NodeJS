import express from 'express'
import path, { join } from 'path'
const app = express()
const port = 8080
const __dirname = path.resolve()

app.set('view engine', 'hbs')

// Servir contenido estatico
app.use(express.static('public'))

/*app.get('/', (req, res)=> {
    res.send('ola camaron')
})*/
/*app.get('/ola', (req, res)=>{
    res.send('camaron')
})*/
app.get('/',(req, res)=>{
    res.render('home')
})
app.get('/generic',(req, res)=>{
    res.sendFile(path.join(__dirname + '/public/generic.html'))
})
app.get('/elements',(req, res)=>{
    res.sendFile(path.join(__dirname + '/public/elements.html'))
})

app.get('*', (req, res)=> {
    res.sendFile(path.join(__dirname + '/public/back/404.html'))
})
app.listen(port, ()=>{
    console.log(`Corriendo en ${port}`)
})