import express from 'express';
import 'dotenv/config'
const app = express();

app.get('/', (req,res)=>{
    res.send('Ola');
});
app.listen(process.env.PORT, ()=>{
    console.log('Servidor corriendo en el puerto ', process.env.PORT);
})

