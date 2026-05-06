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
const user2 = crearUsuario(2, "Daniel")
const user3 = crearUsuario(3, "Claudio")
const user4 = crearUsuario(3, "Pedro")
console.log(user1);
console.log(user2);
console.log(user3);
console.log(user4);

console.log("-----------------------------");
console.log("-----------------------------");

//
const listaUsuarios= [user1, user2, user3, user4];
console.log(listaUsuarios);

console.log("-----------------------------");
console.log("-----------------------------");

//Creamos el Array de precios
const precios= [100, 200, 300, 400];
//Aplicar un descuento del 10% a todos los precios de una
//arrowfunction, (MAp Es para recorrer un array)
const preciosConDescuento = precios.map(p => p * 0.9);
// [90, 180, 270, 360]
console.log(preciosConDescuento);

console.log("-----------------------------");
console.log("-----------------------------");

const superHeroes = ["Omniman","Invensible","AtomEve","The Inmortal"];
//.map recorre el array y por cada nombre crea un objeto
//El segundo parametro de map (i) es el indice (0,1,2....)
const superHeroesProcesados = superHeroes.map((nombre, id) => 
    (
        {
            id: id + 1, 
            nombre: nombre
        },
        {
            id: id + 1, 
            nombre: nombre
        }
    )
);
console.table(superHeroesProcesados);

console.log("-----------------------------");
console.log("-----------------------------");