# Diferencia entre const, var y let
## var
Ultimamente var no se usa ya en js pero para tener el conocimiento, simplemente es una variable de forma global
```
var nombre = 'Peter'
console.log(nombre)

if(true){
    var nombre = 'Peter2'
}
console.log(nombre)
```
El resultado de eso será peter2 por lo mismo que se ha hecho con var, pero que pasa con let?

## let
Let al contrario de var no es de forma global sino que es de ambito, por ejemplo
```
let nombre = 'Peter'
console.log(nombre)

if(true){
    let nombre = 'Peter2'
    console.log(nombre)
}
console.log(nombre)
```
aqui el resultado sera Peter y peter2 porque dentro de la condicional estamos creando otra variable

## const
Utilizar const solamente si se sabe que el valor de esa variable jamas va a cambiar, de ahi el nombre de constante
```
const nombre = 'Peter'
console.log(nombre)

if(true){
    const nombre = 'Peter2'
}
console.log(nombre)
```
Aqui el resultado solamente sera Peter

# Template string
En js tenemos 2 maneras de concatenar ya sea con el nombre + apellido o tambien con la interpolacion usando `${nombre} ${apellido}` para mejor visualizacion ver el codigo

# Callbacks
Un callback en resumidas cuentas es una funcion dentro de otra funcion que se ejecutara en alguna parte del tiempo
O mejor dicho una funcion que se manda como argumento a otra funcion