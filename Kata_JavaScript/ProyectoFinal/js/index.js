const formulario = document.getElementById('formulario')

const dbId = 'gabriel'
const dbPassword = '1234'
const errorIdField = document.getElementById('errorId')
const errorPwField = document.getElementById('errorPassword')


function validar(id,p){

    if(id === '' && p === ''){
        errorId.innerHTML = 'Introduce una identificacion'
        errorPassword.innerHTML = 'Introduce una contraseña'
        console.log('Por favor ingresa un dato')
    }
    else if(id === ''){
        errorId.innerHTML = 'Introduce una identificación'
    }
    else if(p === ''){
        errorPassword.innerHTML = 'Introduce una contraseña'
    }
    else if(id != dbId){
        errorId.innerHTML = 'Introduce una identificación válida'
    }
    else if(p != dbPassword){
        errorPassword.innerHTML = 'Introduce una contraseña válida'
    }
    else{
        if(id === dbId && p === dbPassword){
            window.location.href = './bienvenida.html'
        }
    }
}

formulario.addEventListener('submit', function(event) {
    event.preventDefault()
    const usuario = document.getElementById('username').value
    const password = document.getElementById('password').value
    validar(usuario, password, event)
})