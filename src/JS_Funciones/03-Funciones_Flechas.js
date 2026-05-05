//Si solo tiene una linea, el 'return' es implicito
const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const division = (a, b) => a / b;
const multiplicar = (a, b) => a * b;
//Imprimimos el resultado y hardcoreamos valores
console.log("El resultado de la Sumar es: " + sumar(4, 5));
console.log("El resultado de la Restar es: " + restar(4, 5));
console.log("El resultado de la Division es: " + division(4, 5));
console.log("El resultado de la Multiplicación es: " + multiplicar(4, 5));

console.log("-----------------------------");
console.log("-----------------------------");

//Ejemplo de como convertir Celcius a Farenheit
const celciusFarenheit = c => (c * 9/5) + 32;
console.log("Farenheit: " + celciusFarenheit(30));//86
console.log("Farenheit: " + celciusFarenheit(16));//60.8

console.log("-----------------------------");
console.log("-----------------------------");

//ArrowFunction Implicita
const obtenerVersion = () => "v1.0.4";
console.log("Version del Sistema: " + obtenerVersion());

console.log("-----------------------------");
console.log("-----------------------------");

//Creacion de un objeto dentro de un arrow function
const crearUsuario = (id, nombre) => ({id: id, nombre: nombre});
const user1 = crearUsuario(1, "Aaron");
console.log(user1);

console.log("-----------------------------");
console.log("-----------------------------");