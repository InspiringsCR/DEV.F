// Para poder vacunarme necesito cumplir alguno de los siguiente requerimientos:

const edad = 35
const frontera = false
const embarazo = false
const gestacion = 0

// - 1. Mayores de 18 años que residen en un municipio dronterizo del norte del pais.
if (edad >= 18 && frontera == true) {
    console.log("Por ser mayor de edad y vivir den frontera puedes vacunarte")
}

// - 2. Embarazadas mayores de 18 años con mas de 9 semanas de gestacion.
else if (embarazo == true && edad >= 18 && gestacion >= 9) {
    console.log('Te puedes vacunar por ser mayor de edad y tener 9 semanas de gestacion')
}

// - 3. Personas que cumplan 30 años o mas en este año.
else if (edad >= 30) {
    console.log('Puedes vacunarte porque tienes 30 o mas años')
}

else{
    console.log('Lo sentimos, no puedes vacunarte')
}