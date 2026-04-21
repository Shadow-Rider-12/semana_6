
//Definimos las variables
let x = 2;
let y = 4;

//Mostrar valor de cada variable
console.log("la variable de x tiene un valor de:", x);
console.log("La variable de 'Y' tiene un valor de: ", y);

console.log("-------------------------------------");

//Operaciones matematicas
console.log( "Suma:",y + x);
console.log( "Resta:",y - x);
console.log( "Multiplicacion:",y * x);
console.log( "Division:",y / x);

//transformamos el int en un String
console.log("Parse:" + y / x);

//Definimos Booleanos
let t= true
let f= false

//Comparativa d evalores Booleanos
console.log("Si comparamos t con t da:", t || t);
console.log("Si comparamos t con f da:", t || f);
console.log("Si comparamos f con f da:", f || f);

console.log("--------------");

//Comparativa una u otra
console.log("Si comparamos t ó t da:", t || t);
console.log("Si comparamos t ó f da:", t || f);
console.log("Si comparamos f ó f da:", f || f);

console.log("--------------");

//Cumplos dos condiciones
console.log("Si elegimos entre t y t tenemos: ", t && t);
console.log("Si elegimos entre t y f tenemos: ", t && f);
console.log("Si elegimos entre f y f tenemos: ", f && f);

console.log("---------------");

//Distinto
console.log("Si t es igual a t es: ", t != t);
console.log("Si t es igual a f es: ", t != f);
console.log("Si f es igual a f es: ", f != f);