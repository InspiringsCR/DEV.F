const formulario = document.getElementById('formulario')

const dbId = 'gabriel'
const dbPassword = '1234'
const errorIdField = document.getElementById('errorId')
const errorPwField = document.getElementById('errorPassword')


function validar(id,p,event){
    
    const fieldsNotEmpty = (id !== '' && p !== '')
    const fieldsEmpty = (id === '' && p === '')
    const fieldsNotMatching = (id !== dbId && p !== dbPassword)
    const idErrorMsg = 'Introduce una identificacion'
    const pwErrorMsg = 'Introduce una contraseña'
    const validIdMsg = 'Introduce una identificación válida'
    const validPwMsg = 'Introduce una contraseña válida'
    const anyFieldEmpty = (id === '' || p === '')
    const idEmpty = (id === '')
    const pwEmpty = (p === '')
    const validId = (id === dbId)
    const validPw = (p === dbPw)
    const anyFieldInvalid = (!validId || !validPw)

    // Validating empty fields
    if (fieldsEmpty || fieldsNotMatching) {
        event.preventDefault()

        if (fieldsEmpty || anyFieldEmpty) {
            if (idEmpty) {
                errorIdField.innerHTML = idErrorMsg 
            }
            if (pwEmpty) {
                errorPwField.innerHTML = pwErrorMsg
            }
        }
    }

    // Validating not empty fields
    if (fieldsNotEmpty) {

        // stopping redirect
        if (anyFieldInvalid) {
            event.preventDefault()
        }

        // Adding error messages
        if (fieldsNotMatching) {
            if (!validId) {
                errorIdField.innerHTML = validIdMsg
            }
            if (!validPw) {
                errorPwField.innerHTML = validPwMsg
            }
        }
    }

    // if(id === '' && p === ''){
    //     errorId.innerHTML = 'Introduce una identificacion'
    //     errorPassword.innerHTML = 'Introduce una contraseña'
    //     console.log('Por favor ingresa un dato')
    // }
    // else if(id === ''){
    //     errorId.innerHTML = 'Introduce una identificación'
    // }
    // else if(p === ''){
    //     errorPassword.innerHTML = 'Introduce una contraseña'
    // }
    // else if(id != dbId){
    //     errorId.innerHTML = 'Introduce una identificación válida'
    // }
    // else if(p != dbPassword){
    //     errorPassword.innerHTML = 'Introduce una contraseña válida'
    // }
    // else{
    //     if(id === dbId && p === dbPassword){
    //         window.location.href = './bienvenida.html'
    //     }
    // }
}

formulario.addEventListener('submit', function(event) {
    const usuario = document.getElementById('username').value
    const password = document.getElementById('password').value
    validar(usuario, password, event)
})