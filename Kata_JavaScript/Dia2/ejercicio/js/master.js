// Crear un programa para evaluar si tenemos covid 
// 1.- Solicitar al usuario si tiene los siguientes sintomas 
// a.- dolor de cabeza
// b.- Dificultad para respirar 
// c.- temperatura mayor a 37grados
// d.- Dolor de cuerpo
// e.- Si tengo vacunas aplicadas

// 2 a- Debo evaluar si  tengo 3 de los sintomas
// (dolor de cabeza, disficultad al respirar, temperatura)
// y no tengo vacunas tengo un 70% de tener covid
// 2,b Si presento 3 sintomas y tengo mis vacunas tendre un 40% de tener covid
//2.c - si presento todos los sintomas pues tengo 100% aunque tenga las vacunas

const dolorCabeza = true;
const dificultadRespirar = true;
const temperatura = 40;
const dolorCuerpo = true;
const vacunasAplicadas = false;

let sumaSintomas = 0;

if (dolorCabeza == true && dificultadRespirar == true && temperatura > 37 && vacunasAplicadas == false){

    console.log('Tengo un 70% de tener covid');
}

if (dolorCabeza == true){
    
    sumaSintomas = sumaSintomas + 1;
}

if (dificultadRespirar == true){

    sumaSintomas = sumaSintomas + 1;
}

if (temperatura > 37){

    sumaSintomas = sumaSintomas + 1;
}

if (dolorCuerpo == true){

    sumaSintomas = sumaSintomas + 1;
}

if (sumaSintomas == 3 && vacunasAplicadas == true){

    console.log('tengo un 70% de tener covid');
}

else if(sumaSintomas == 4 ){

    console.log('tengo un 100% aunque tenga las vacunas o sea ya moriste');
}