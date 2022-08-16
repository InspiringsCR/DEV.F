console.log('Inicia bucle');

const tabla = 5;

for(let index = 1; index <= 10; index++) {
    let resultado = tabla * index;
    console.log(tabla, 'x', index, '=', resultado);
    if(index === 4){
        console.log('Soy un 4')
    }
    else if(index === 8){
        console.log('index en posicion 8')
    }
}

console.log('Termino el bucle');