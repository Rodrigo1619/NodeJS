const empleados = [
    {
        id:1,
        Nombre: 'Brandon'
    },
    {
        id:2,
        Nombre: 'Rodrigo'
    },
    {
        id:3,
        Nombre: 'Molina'
    },
    
]
const salarios = [
    {
        id:1,
        salario: 100
    },
    {
        id:2,
        salario: 100
    }
]

const getEmpleado = (id, callback)=>{
    const empleado = empleados.find(e => e.id === id)

    if(empleado){
        callback(null, empleado) //se manda null si no hay un error
    }else{
        callback(`Empleado con id ${id} no existe`)
    }
}

getEmpleado(5,(err,empleado)=>{
    if(err){
        console.log('ERROR')
        return console.log(err)
    }
    console.log('Empleado existente')
    console.log(empleado)
})

