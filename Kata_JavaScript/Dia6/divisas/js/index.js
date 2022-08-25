// Mandamos a traer nuestros elementos del DOM
const select = document.getElementById('select')
const render = document.querySelector('#render')
const form = document.getElementById('form')
const resultado = document.getElementById('resultado')

// La moneda en el select por default es dolar, asi que lo guardamos en esta variable
let moneda = 'dolar'


// Con esta funcion vamos a calcular el tipo de cambio dependiendo de la moneda
// que este seleccionada en el select
// recibe 2 parametros, m que es la MONEDA y m2 que es el MONTO
const calcular = (m, m2) =>{
    // Si la MONEDA es igual a DOLAR
    if(m === 'dolar'){
        resultado.innerHTML = `
        Un dolar es = a ${(m2 * 20.66).toFixed(2)} Pesos Mexicanos. <br/>
        Un dolar es = a ${(m2 * 7.33).toFixed(2)} Quetzales. <br/>
        Un dolar es = a ${(m2 * 3.89).toFixed(2)}Soles.
        `
    }
    // Si la MONEDA es igual a MX
    else if(m === 'mx'){
        resultado.innerHTML = `
        Un peso Mexicano es = a ${(m2 * 0.048).toFixed(2)} dolares. <br/>
        Un peso Mexicano es = a ${(m2 * 0.37).toFixed(2)} Quetzales. <br/>
        Un peso Mexicano es = a ${(m2 * 0.19).toFixed(2)} Soles.
        `
    }
    // Si la MONEDA es igual a quetzal
    else if(m === 'quetzal'){
        resultado.innerHTML = `
        Un quetzal es = a ${(m2 * 0.13).toFixed(2)} dolares. <br/>
        Un quetzal es = a ${(m2 * 2.67).toFixed(2)} Pesos Mexicanos. <br/>
        Un quetzal es = a ${(m2 * 0.50).toFixed(2)} Soles.
        `
    }
    // Si la MONEDA es igual a soles
    else if(m === 'soles'){
        resultado.innerHTML = `
        Un sol es = a ${(m2 * 0.26).toFixed(2)} dolares. <br/>
        Un sol es = a ${(m2 * 5.31).toFixed(2)} pesos Mexicanos. <br/>
        Un sol es = a ${(m2 * 1.99).toFixed(2)} x Quetzales.
        `
    }
}

// Con esta funcion vamos a renderizar en pantalla la moneda que esta seleccionada
// Inicialmente sera dolar pero cuando se ejecute un cambio en el select
// esto tambien cambiara.
const pintarContenido = (value) => {
    let span = document.getElementById('span')
    span.classList.add('span')
    if(value === 'dolar'){
        span.innerHTML = `Seleccionaste la moneda <strong>dolar</strong>`
    }
    else if(value === 'mx'){
        span.innerHTML = `Seleccionaste la moneda <strong>peso Mexicano</strong>`
    }
    else if(value === 'quetzal'){
        span.innerHTML = `Seleccionaste la moneda <strong>quetzal</strong>`
    }
    else if(value === 'soles'){
        span.innerHTML = `Seleccionaste la moneda <strong>soles</strong>`
    }
    
}

 // Con este onChange, detectamos cada vez que haya un cambio en el SELECT
 // para asi saber que moneda eligio el usuario,
select.onchange = (evento) => {
    let value = evento.target.value
    if(value === ''){
        value = null
        console.log(value);
        if(value === null){
            console.log('Selecciona una moneda para continuar');
        }
    }
    else if(value != null){
        // Mandamamos a llamar a la funcion pintar contenido y le pasamos por parametro
        // el value que el usuario selecciono, osea la moneda.
        pintarContenido(value)
        // Actualizamos el valor de nuestra moneda que inicialmente era dolar
        moneda = value
        console.log(value);
    }
    
    
}

// Con este Listener vamos a estar pendientes a cuando recibamos un SUBMIT en nuestro
// formulario, para asi convertirlo a numero y poder hacer nuestros calculos.
form.addEventListener('submit',(evento)=>{
    evento.preventDefault()
    // Convertimos nuestro string a numero con el metodo Number
    let monto = Number(document.getElementById('monto').value)
    // Llamamos a la funcion calcular y por parametro le pasamos la moneda actualizada
    // y el monto que esta ingresando el usuario
    calcular(moneda, monto)
})
