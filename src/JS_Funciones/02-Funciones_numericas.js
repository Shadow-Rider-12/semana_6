//Definimos las variables
let a = 22;
let b = 31;


//Declaramos una funcion
function sumar(a, b){
    return a + b;
}
function resta(a, b){
    return a - b;
}
function div(a, b){
    return a / b;
}

//Definimos Una variable llamando una funcion
let resultadoSuma = sumar(a, b);
let resultadoResta = resta(a, b);
let resultadoDiv = div(a, b);
console.log("El resultado de la suma es: " + resultadoSuma);
console.log("El resultado de la resta es: " + resultadoResta);
console.log("El resultado de la div es: " + resultadoDiv);

console.log("-------------------------------------");
console.log("-------------------------------------");

function sumar2(x, z){
    return x + z;
}
function resta2(x, z){
    return x - z;
}
function div2(x, z){
    return x / z;
}
function mult2(x, z){
    return x * z;
}

let resultadoSuma2 = sumar2(10, 5);
let resultadoResta2 = resta2(10, 5);
let resultadoDiv2 = div2(10, 5);
let resultadoMult2 = mult2(10, 5);
console.log("El resultado de la suma es: " + resultadoSuma2);
console.log("El resultado de la resta es: " + resultadoResta2);
console.log("El resultado de la division es: " + resultadoDiv2);
console.log("El resultado de la multiplicación es: " + resultadoMult2);

console.log("-------------------------------------");
console.log("-------------------------------------");
