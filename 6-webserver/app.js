import express from 'express'
import path, { join } from 'path'
import hbs from 'hbs'
import 'dotenv/config'


const app = express()
const port = process.env.PORT
const __dirname = path.resolve()

//handlebars
app.set('view engine', 'hbs')
hbs.registerPartials(path.join(__dirname + '/views/partials'));

// Servir contenido estatico
app.use(express.static('public'))

/*app.get('/', (req, res)=> {
    res.send('ola camaron')
})*/
/*app.get('/ola', (req, res)=>{
    res.send('camaron')
})*/
app.get('/',(req, res)=>{
    res.render('home',{
        nombre: 'Rodrigo',
        titulo: 'curso de node'
    })
})
app.get('/generic',(req, res)=>{
    //res.sendFile(path.join(__dirname + '/public/generic.html'))
    res.render('generic',{
        nombre:'Rodrigo',
        titulo: 'curso de node'
    })
})
app.get('/elements',(req, res)=>{
    //res.sendFile(path.join(__dirname + '/public/elements.html'))
    res.render('elements',{
        nombre: 'Rodrigo',
        titulo: 'curso de node'
    })
})

app.get('*', (req, res)=> {
    res.sendFile(path.join(__dirname + '/public/back/404.html'))
})
app.listen(port, ()=>{
    console.log(`Corriendo en ${port}`)
})