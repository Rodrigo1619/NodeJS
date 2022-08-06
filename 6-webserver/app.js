import express from 'express'
const app = express()
const port = 8080

app.get('/', (req, res)=> {
    res.send('ola camaron')
})
app.get('*', (req, res)=> {
    res.send('404 pagina no encontrada')
})
app.listen(port, ()=>{
    console.log(`Corriendo en ${port}`)
})