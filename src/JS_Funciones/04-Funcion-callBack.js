/*
//La funcion principal: Ella tiene el mensaje, pero no sabe que hacer con el.
function obtenerMensaje(callback){
    const texto = "¡Clase de JS terminada!";
    callback(texto); //Le pasa el texto a la funcion que tu le envies
}

//Opcion A: Solo imprimirlo
obtenerMensaje((m) => console.log(m));
//Opcion B: Alertamos (aparece una ventana en el navegador)
obtenerMensaje((m) => alert(m));


console.log("---------------------------------")
console.log("---------------------------------")
*/
/*
function calculadora(a,b, operacion){
    return operacion(a,b)
}

const Suma = calculadora (10,5, (x,y) => x + y);
const Resta = calculadora (10,5, (x,y) => x - y);
const Multiplicacion = calculadora (10,5, (x,y) => x * y);
console.log("Suma: " + Suma);
console.log("Resta: " + Resta);
console.log("Multiplicacion: " + Multiplicacion);

console.log("---------------------------------")
console.log("---------------------------------")
*/
/*
//Definició: "procesarEntrada" es la funcion pricipal
function procesarEntrada(callback){
    let nombre = "Aaron";
    callback(nombre);
}
procesarEntrada((n) => {console.log("El callback se esta ejecutando para: " + n)});

console.log("---------------------------------")
console.log("---------------------------------")
*/
/*
const nums = [1, 2, 3, 4, 5];
//funcion principal que recorre el array
function operarConNumeros(lista, accion){
    for(let n of lista){
        accion(n);
    }
}
//Caso A: Queremos imprimir el doble
operarConNumeros(nums, (num) => { console.log("El doble de " + num + " es " + (num * 2));   
});

console.log("---------------------------------")

//Caso B: Queremos saber si son Pares
operarConNumeros(nums, (num) => {
    if (num % 2 === 0){
        console.log(num + "es un numero par")
    }else {
        console.log(num + "es un número impar");
    }
})

console.log("---------------------------------")
console.log("---------------------------------")
*/
/*
function formatearNombre(nombre, apellido, callback){
    return callback(nombre, apellido);
}
//Ejemplo 1: Formato para una lista de asistencia (Apellido, Nombre)
const listaAsistencia = formatearNombre("Aaron", "Alvares", (n, a) => {
    return a.toUpperCase() + ", "+ n;
})
console.log(listaAsistencia)

console.log("---------------------------------")

//Ejemplo 2: Formato para un diploma (Nombre, Apellido)
const diploma = formatearNombre("Aaron", "Alvares", (n,a) => { return "Don/Doña " + n + " " + a})
console.log(listaAsistencia);
console.log(diploma);

console.log("---------------------------------")
console.log("---------------------------------")
*/
/*
function procesarEntrada(callback){
    console.log("1. El sistema esta preparando los datos...");
    let nombre = "Aaron"
    
    console.log("2. Los datos estan listos. Llamando a la callback...");
    callback(nombre);
    }
    //Aqui tu decides que pasa al final del proceso
    procesarEntrada((n) => { console.log("3. ¡Hola " + n + "! los datos se guardaron con exito.");    
    })
console.log("---------------------------------")
console.log("---------------------------------")
*/
/*
//Funcion principal: recibe un dato y una funcion que decide si es valido
function validarDato(dato, callback){
    if (callback(dato)){
        console.log("Dato Valido: " + dato);
    }else{
        console.log("Dato Invalido: " + dato);
    }
}
//Valida si el numero es mayor a 10
validarDato(15, (n) => n > 10);
validarDato(5, (n) => n > 10);

console.log("---------------------------------")
console.log("---------------------------------")
*/
/*
//Funcion principal :recibe un texto y una funcion que lo modifica
function transformarTexto(texto, callback){
    return callback(texto);
}
//callback 1: convertir a mayusculas
const mayus= transformarTexto("hola mundo", (t) => t.toUpperCase());

const exclamacion= transformarTexto("hola mundo", (t) => "¡¡" + t + "!!");

const exclamacionMayus = transformarTexto("hola mundo", (t) => "¡¡" + t.toUpperCase() + "!!");

console.log(mayus);
console.log(exclamacion);
console.log(exclamacionMayus);

console.log("---------------------------------")
console.log("---------------------------------")
*/
/*
//Callback ejecutando varias veces (contador)
//Funcion principal: repite una accion varias veces
function repetirAccion(veces, callback){
    for(let i = 1; i <= veces; i++){
        callback(i);
        }
        }
        //Callback: mostrar número de repiticion
        repetirAccion(3, (num) => {
            console.log("Ejecución numero: " + num);
}); 
console.log("---------------------------------")
console.log("---------------------------------")
*/
/*
//Funcion principal: simula un proceso de compra
function procesarCompra(producto, callback){
    console.log("Procesando compra de: " + producto);
    //Aqui se ejecuta lo que queremos hacer despues
    callback(producto);
}
//Callbaack 1: mostrar mensaje de exito
procesarCompra("Notebook", (p) => {
    console.log("Compra realizada con exito: " + p);
});
console.log("---------");
procesarCompra("Notebook", (p) => {
    console.log("Generando boleta para: " + p);
});
console.log("---------------------------------")
console.log("---------------------------------")
*/

//Procesador con multiples callbacks (filtrar + transformar + accion final)
//Funcion principal: recibe una lista y 3 callbacks
function procesarDartos(lista,filtro,transformador, accionFinal){
    let resultado = []

    for(let elemento of lista){
        //1. Primero decidimos si el elemento pasa el filtro
        if (filtro(elemento)){
            //2. Luego transformamos el elemento
            let transformado = transformador(elemento);
            //3. Guardamos el resultado
            resultado.push(transformado);
        }
    }
    //4. Finalmente ejecutamos una accion con todos los resultados
    accionFinal(resultado)
};
//lista de numeros
const numeros = [1, 2, 3, 4, 5, 6]
//Ejecucion: Aqui esta lo complejo
//Estamos pasando 3 callbacks distintos al mismo tiempo
procesarDartos(
    numeros,
    //Callback1: Filtro (solo numeros pares)
    (n) => n % 2 === 0,
    //Callback 2: Transformador (multiplicador por 10)
    (n) => n * 10,
    //Callback 3: Accion Final (mostrar resultado)
    (resultado) => {
        console.log("Resultado final: ");
        for(let r of resultado){
            console.log(r);
        }
    }
)