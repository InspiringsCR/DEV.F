const formulario = document.getElementById('formulario')

const dbUser = 'gabriel'
const dbPassword = '1234'

const crear = () =>{
    let span = document.createElement('span')
    span.classList.add('lista')
    span.innerHTML = `
    Hola soy un span, creado desde JavaScript
    `
    let render = document.getElementById('render')
    render.appendChild(span)
}

function errores (tipo){
    let error = document.getElementById(`error${tipo}`)
    error.classList.remove('hide')
    error.classList.add('error')
    setTimeout(function(){
        error.classList.remove('error')
        error.classList.add('hide')
    },3000)
}

function validar(u,p){
    if(u === '' || p === ''){
        console.log('Por favor ingresa un dato')
        errores('Datos')
    }
    else{
        if(u === dbUser && p === dbPassword){
            console.log('Bienvenido a tu cuenta')
            crear()
        }
        else if(u != dbUser){
            // let errorUser = document.getElementById('errorUsuario')
            // errorUser.classList.remove('hide')
            // errorUser.classList.add('error')
            // setTimeout(function(){
            //     errorUser.classList.remove('error')
            //     errorUser.classList.add('hide')
            // },3000)
            errores('Usuario')
        }
        else if(p != dbPassword){
        //     let errorPassword = document.getElementById('errorPassword')
        //     errorPassword.classList.remove('hide')
        //     errorPassword.classList.add('error')
        //     setTimeout(function(){
        //         errorUser.classList.remove('error')
        //         errorUser.classList.add('hide')
        //     },3000)
        errores('Password')
        }
    }
}

formulario.addEventListener('submit', function(evento) {
    evento.preventDefault()
    let usuario = document.getElementById('usuario').value
    let password = document.getElementById('password').value
    validar(usuario, password)
})
