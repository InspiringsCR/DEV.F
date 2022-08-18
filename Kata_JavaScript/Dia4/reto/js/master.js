// Crear una aplicacion que le solicite al usuario 2 datos,
// el nombre y su color favorito(azul, rojo, verde, amarillo, morado)
// si el color es diferente de alguno de los que mencionamos notificarle al usuario y que recargue la pagina para ingresar un color correcto
// crear una funcion que reciba por parametros el nombre del usario y el color
// validar segun el color que recibamos por parametro algo que se relacion con el color
// ejemplo si el color es azul, podriamos poner un console log que nombre de usuario, elegiste el azul, como el cielo.

const nombre = prompt('Ingresa tu nombre')
const colorFav = prompt('Cual es tu color favorito? (Azul, rojo, verde, amarillo, morado)').toLowerCase()

function validar(nombreUser, colorFavUser) {
    if(colorFav === 'azul') {
        console.log('Muy bien', nombre, 'elegiste el azul como el cielo')
        return true
    }
    else if(colorFav === 'rojo') {
        console.log('Muy bien', nombre, 'elegiste el rojo como la sangre')
        return false
    }
    else if(colorFav === 'verde') {
        console.log('Muy bien', nombre, 'elegiste el verde como el pasto')
        return false
    }
    else if(colorFav === 'amarillo') {
        console.log('Muy bien', nombre, 'elegiste el amarillo como el sol')
        return false
    }
    else if(colorFav === 'morado') {
        console.log('Muy bien', nombre, 'elegiste el morado como la uva')
        return false
    }
    else{
        console.log('No encontramos el color que elegiste, recarga la pagina y vuelve a ingresar un color de los que te nombramos')
        return false
    }
}
const resultado = validar(nombre, colorFav)