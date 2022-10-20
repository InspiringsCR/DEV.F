
//-----Función para encontrar el string más largo ------

const longestCountry= (countryArr) =>{
z = 0
longStr = ""

for (i=0; i<countryArr.length;i++){
    if (countryArr[i].length>longStr.length){
        z=i
        longStr = countryArr[i] }
}
console.log(`The longest country name is ${countryArr[z]}`)
}

//--------------------------------------------------------

const countries = ["Mexico","Uruguay","El Salvador","Guatemala","Japan", "Russia"]
console.log(`The list of countries is: ${countries}`)
longestCountry(countries)
