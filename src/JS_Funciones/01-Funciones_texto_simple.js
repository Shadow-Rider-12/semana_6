//Definimos una variable
let nombre = "Aaron";
//Creamos la primera funcion 
function saludar(){
    console.log ("Hola Profe " + nombre + "!");
    console.log ("Estamos en clase de Desarrollo Web");
}
saludar();

console.log("--------------------------")
console.log("--------------------------")

function saludar2(apellido){
    console.log("Hola ", + apellido + "!");
}
console.log("Alvares");

console.log("--------------------------")
console.log("--------------------------")

//Funcion sin parametros
function mostrarFechaActual(){
    //Ojo Estamos usando una constante, es decir no cambia,
    //pero,... la hora cambia a cada segundo
    const ahora = new Date()
    console.log("Hoy es: " + ahora);
}
//Cada vez que la llames, hará exactamente lo mismo
mostrarFechaActual();

console.log("--------------------------")
console.log("--------------------------")

//Funcoin con if, omitimos la creacion de variables, y aque las parseamos abajo
function verificarAcceso(nombre, edad){
    if (edad >=18){
        console.log("Bienvenido " + nombre + ". Tienes acceso concedido.");
    }else {
        console.log("Lo siento " + nombre + ", eres menor de edad.");
    }
}
verificarAcceso("Ezla Patito", 18);
verificarAcceso("Elviz tek", 20);

console.log("--------------------------")
console.log("--------------------------")

//Tarea, crear la misma funcion de arriba pero definiendo las variables
console.log(",,,,,,,,,");

let nombre1 = "Aaron Alvares"; // Usamos let para poder cambiar su valor si es necesario
let edad1 = 20;

function verificarAcceso2(nombre, edad) {
    if (edad >= 18) {
        console.log("Bienvenido " + nombre + ". Tienes acceso concedido.");
    } else {
        console.log("Lo siento " + nombre + ", eres menor de edad.");
    }
}

verificarAcceso2(nombre1, edad1);

console.log("--------------------------")
console.log("--------------------------")

//Definimos la variable con un monto
function calcularImpuesto(monto){
    //Esta variable solo existe aqui dentro, bisto en clase pasada
    let tasa = 0.19;
    let total = monto * tasa;
    return total;
}
//resultado que esperamos 190
console.log("Resultado: ", calcularImpuesto(1000));

console.log("--------------------------")
console.log("--------------------------")

function multiRestDiv(mrd){
    let numeroAMultiplicar = mrd * 10;
    let numeroResta = numeroAMultiplicar - mrd;
    let numeroDiv = numeroResta / mrd;
    return numeroDiv;
}
console.log("Resultado: ", multiRestDiv(10));