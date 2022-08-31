const totalSaldo = document.getElementById('totalSaldo')
const totalIngreso = document.getElementById('totalIngreso')
const totalRetiro = document.getElementById('totalRetiro')
const ingresar = document.getElementById('ingresar')
const registrar = document.getElementById('registrar')
const registrarDato = document.getElementById('registrarDato')
const retiro = 0;
const ingreso = 0;
const saldo = 0;
const operaciones = []
const monto = 0;

function registrarOperaciones(){
    if(registrarDato === 0){
        alert('El monto debe ser un valor mayor a cero');
        console.log('ingresar')
    }
}

registrar.addEventListener('registrar', function(registrarOperaciones) {
    registrarOperaciones.console.log(registrarDato);

})
