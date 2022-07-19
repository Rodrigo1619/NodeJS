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
const id = 10

const getEmpleado = (id, callback)=>{
    const empleado = empleados.find(e => e.id === id)?.Nombre

    if(empleado){
        callback(null, empleado) //se manda null si no hay un error
    }else{
        callback(`Empleado con id ${id} no existe`)
    }
}
const getSalario = (id, callback)=>{
    const salario = salarios.find(e=> e.id === id)?.salario

    if(salario){
        callback(null, salario)
    }else{
        callback(`Salario no existe`)
    }
}

getEmpleado(id,(err,empleado)=>{
    if(err){
        console.log('ERROR')
        return console.log(err)
    }
    

    getSalario(id,(err,salario)=>{
        if(err){
            return console.log(err)
        }
        console.log(`El empleado ${empleado} tiene un salario de ${salario}`)
        
    })
})


