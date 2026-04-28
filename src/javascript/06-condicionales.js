

//Definifr las variables
let edad = 30
let limiteEdad = 20

//if 
if(edad >= limiteEdad){
    console.log("Es mayor de edad");
}else{
    console.log("Es menor de edad");
}

console.log("-----------------------")

//if anidado
if(edad >= limiteEdad){
    console.log("Es mayor de edad");

    if(edad == 20){
        console.log("El usuario tiene 20");
    }else if(edad >= 21){
        console.log("Es adulto en todos lados");
    }
        

}else{
    console.log("Es menor de edad");
}

console.log("-----------------------")

//Creamos otro if, usando el "Y" (&&)
if (edad >= limiteEdad && (edad <= (limiteEdad + 82))){
    console.log("Mayor de edad y menor de 100");
    //agregamos el operador && (Y) y el distinto !=
}else if(edad<= limiteEdad && edad !=2){
    console.log("Esta persona es menor de edad y no tiene dos años");
}else{
    console.log("Es un Puberto");
}