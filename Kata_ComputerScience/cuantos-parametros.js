const howManyParameters = (...parameters) =>{
    i=0
    parameters.forEach(()=>{i++})
    console.log(i)
}

howManyParameters(1,1,1)