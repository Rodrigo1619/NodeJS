setTimeout(()=>{
    console.log('ola')
},1000) //1000 milisegundos es un segundo

/*
Esta es una manera que aun funciona pero hay otra manera
const getUsuarioById = (id)=>{

    const usuario = {
        id,
        nombre: 'Rodrigo'
    }
    setTimeout(()=>{
        console.log(usuario)
    },1500)
    getUsuarioById(10)
}*/ 
const getUsuarioById = (id, callback)=>{ //ese callback solo es un nombre se puede llamar como sea
    const user = {
        id,
        nombre: 'Rodrigo'
    }
    setTimeout(() => {
        callback(user)
    }, 1500);
}
getUsuarioById(10, (ususario)=>{
    console.log(ususario.id)
    console.log(ususario.nombre)
})
