var numLados
var longitudLado

numLados = input("Cuantos lados tiene la figura?")

if (numLados<3) print("No existen figuras de menos de 3 lados")
    else 
        longitudLado = input("¿Cuánto mide uno de sus lados?")
        if (numLados = 3) 
            (sqrt(3)/4)*(longitudLado**2)
        else if (numLados = 4)
            longitudLado**2
        else if(numLados > 4)
            (sqrt(3)/4)*(longitudLado**2)*numLados
        else
            print("Esa longitud no es valida")
    