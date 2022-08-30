const formulario = document.getElementById('formulario')

const dbId = 'gabriel'
const dbPassword = '1234'
const errorId = document.getElementById('errorId')
const errorPassword = document.getElementById('errorPassword')

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
            document.getElementById('btn').addEventListener('click', ()=>{
                window.location.href = './bienvenida.html'
            })
        }
    }
}

formulario.addEventListener('submit', function(evento) {
    evento.preventDefault()
    let usuario = document.getElementById('username').value
    let password = document.getElementById('password').value
    validar(usuario, password)
})
