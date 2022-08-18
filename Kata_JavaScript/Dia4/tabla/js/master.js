// Creando una funcion de tablas de multiplicar //
function imprimirTabla(numero) {
    for(let index = 1; index <= 10; index++) {
        let resultado = numero * index
        console.log(numero, 'x', index, '=', resultado)
    }
}

imprimirTabla(2)
imprimirTabla(3)
imprimirTabla(4)