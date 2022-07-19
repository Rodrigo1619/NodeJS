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
const id = 3
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

const getInfoUsuario = async(id)=>{

    try {
        const empleado = await getEmpleado(id)
        const salario = await getSalario(id)

        return `El salario del empleado ${empleado} es de ${salario}`        
    } catch (error) {
        throw error
    }

}

getInfoUsuario(id)
    .then(msg=>console.log(msg))
    .catch(err => console.log(err))