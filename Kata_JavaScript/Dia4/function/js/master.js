// Llamando a llamar la funcion con el console.log() //
function sumar(num1, num2) {
    let total = num1 + num2;
    console.log('La suma es ' + total);
}
sumar(1, 9);

// Llamando a llamar la funcion con el return //
function marcador() {
    let part1 = 3
    let part2 = 3
    function agregar(){
        let nombre = 'Gabriel'
        console.log(nombre + ' anoto', (part1 + part2), 'goles')
    }
    return agregar()
}

marcador()