
//------- Clase padre ---------
class Electrodomestico{
    constructor(precio,color,capacidad){
        this.precio = precio
        this.color = color
        this.capacidad = capacidad
        this.consumoEnergetico = 100 
    }

    precioFinal(){
        return this.cargaKg * this.consumoEnergetico
    }
}

//------- subclase ---------
class lavadora extends Electrodomestico{
    constructor(precio, color, capacidad, cargaKg){
        super(precio,color,capacidad)
        this.cargaKg = cargaKg
    }
}

//------- Creamos una nueva instancia de la subclase ---------
let lavadora = new lavadora(500,'blanco',5,)
console.log(lavadora.precioFinal())

