// Creando una funcion animada //
const nombre = prompt('Ingresa tu nombre') // El metodo prompt se utiliza para pedirle al usuario que introduzca algo.
const edad = Number(prompt('Ingresa tu edad')) // El metodo Number se utiliza para que reconozca que es un numero.
const examen = prompt('Aprovaste el examen de manejo?').toLowerCase() // El método toLowerCase() devuelve el valor en minúsculas de la cadena que realiza la llamada.
const vista = Number(prompt('Del 1 al 10 que tan bien ves?'))

function validar(nombreUser, edadUser, examenUser, vistaUser) {
    if(edadUser >= 18){
        if(examenUser === 'si' && vistaUser >= 6){
            console.log('Felicidades ', nombreUser, ' obtuviste tu licencia de conducir')
            return true
        }
        else{
            console.log('No pasaste los filtros')
            return false
        }
    }
    else if(edadUser <= 18){
        console.log('Lo sentimos', nombreUser,'no puedes obtener tu licencia')
        return false
    }
}
const resultado = validar(nombre, edad, examen, vista)

function comprar (boolean){
    if(boolean === true){
        console.log('Puedes comprar un vehiculo')
    }
    else{
        console.log('Lo sentimos, no puedes comprar un vehiculo')
    }
}
comprar(resultado)