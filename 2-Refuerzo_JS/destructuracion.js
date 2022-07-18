const deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    getNombre(){
        return `${this.nombre} ${this.apellido} ${this.poder}`
    }
}

// Una forma donde se puede hacer pero no muy eficiente
/*const nombre   = deadpool.nombre
const apellido = deadpool.apellido
const poder = deadpool.poder*/

//Haciendo desestructuracion
const {nombre, apellido, poder} = deadpool

//Hay 2 formas para hacerlo en funciones que es de la siguiente manera
//Manera 1
/*function imprimirHeroe(heroe){
    const {nombre, apellido, poder} = heroe
    console.log(nombre, apellido, poder)
}*/
//Manera 2
/*function imprimirHeroe({nombre, apellido, poder}){
    console.log(nombre, apellido, poder)
}*/

//console.log(nombre, apellido, poder)
//imprimirHeroe(deadpool) 