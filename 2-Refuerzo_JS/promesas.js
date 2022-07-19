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
const id = 30
const getEmpleado = (id)=>{
    return new Promise((resolve, reject )=>{
        const empleado = empleados.find(e => e.id === id)?.Nombre

        if(empleado){
            resolve(empleado)
        }else{
            reject(`No hay empleado con id ${id}`)
        } 
    })
}

const getSalario = (id)=>{
    return new Promise((resolve, reject )=>{
        const salario = salarios.find(e => e.id === id)?.salario

        if(salario){
            resolve(salario)
        }else{
            reject(`No hay salario con id ${id}`)
        } 
    })
}

/*getEmpleado(id)
    .then(empleado=> console.log(empleado))
    .catch(err => console.log(err))
getSalario(id)
    .then(salario=> console.log(salario))
    .catch(err => console.log(err))*/

/*getEmpleado(id)
    .then(empleado=>{
        getSalario(id)
            .then(salario=>{
                console.log(`El empleado ${empleado} tiene un salario de ${salario}`)
            })
            .catch(err=>console.log(err))
    })
    .catch(err=>console.log(err))*/

//forma mas facil de hacerlo- promesas encadenadas
let nombre
getEmpleado(id)
    .then(empleado=>{
        nombre = empleado
        return getSalario(id)
    })
    .then(salario => console.log(`El empleado ${nombre} tiene salario de ${salario}`))
    .catch(err=>console.log(err))