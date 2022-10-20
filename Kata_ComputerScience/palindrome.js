
// -------- Reto Palíndromo ------------


//----- Esta función es específicamente para voltear cualquier string -------
const reverseString = (inputString) => {
    var reverseString = inputString.split("").reverse().join("")
    return reverseString
}

// -------- 
const palindromeCheck = (inputStr) => { 
    
    if (inputStr.includes(" ")){ //----------- Si el string tiene espacios " "
    inputStr = inputStr.replaceAll(" ","") //- se los quitamos antes de voltearlo :)
    var reverseStr = reverseString(inputStr) 
        }
    else {
    var reverseStr = reverseString(inputStr) //Si no tiene espacios, nomás lo volteamos :)
        }
    
    if (inputStr == reverseStr){return true} //Validar si es igual al derecho y al revés
    else {return false}
    }

var word = "ana"
var palindrome = palindromeCheck(word)

if (palindrome){console.log(`${word} is a palindrome`) }
else {console.log(`${word} is not palindrome`)}