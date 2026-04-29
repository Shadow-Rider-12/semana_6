//Definimos una variable numerica
var numero = 10;

//Utilizamos el for para incrementar en 1 cada numero
for (var i = 1; i <= numero; i++){
    console.log("Numero: ", i);
}
console.log("--------------------");
console.log("--------------------");

for (var i = 10; i >= 1; i--){
    console.log("Numero: ", i);
}
console.log("--------------------");
console.log("--------------------");

//Buscamos el numero par, pero notar que estamos sumando 2
for(var i=2; i <= numero; i+= 2){
    console.log("Par: ", i);
}
console.log("------------------------------")
console.log("------------------------------")

//Identificamos los numeros par e impar
for(var i = 1; i <= numero; i++){
    var esPar = i % 2 == 0;
    if(esPar){
        console.log(i + " Es Par");
    }else{
        console.log(i + " Es Impar");
    }
}

console.log("------------------------------")
console.log("------------------------------")
var frutas = ["manzana", "pera", "uva", "naranja"]

for (var i = 0; i < frutas.length; i++){
    console.log("Fruta: ", frutas);
}

console.log("------------------------------")
console.log("------------------------------")

//forEach
frutas.forEach(function (fruta){
    console.log("Fruta con ForEach: ", fruta);
}
);

console.log("------------------------------")
console.log("------------------------------")

//Version optimizada para listas mas pequeñas 
for (var fruta of frutas){
    console.log("Fruta: ", fruta);
}
console.log("------------------------------")
console.log("------------------------------")

var ucm = ["IronMan", "Hulk", "Thor", "Gru"];
for (var i of ucm){
    console.log("Personajes: ", i);
}

console.log("------------------------------")
console.log("------------------------------")

var ucmMayusculas = ucm.map(function (ucm){
    return ucm.toUpperCase();
});
console.log(ucmMayusculas);

console.log("------------------------------")
console.log("------------------------------")

var ucmMinuscula = ucm.map(function (ucm){
    return ucm.toLowerCase();
});
console.log(ucmMinuscula);

console.log("------------------------------")
console.log("------------------------------")

//Definir el Array
var bandas = ["Adema", "AC/DC", "Angra", "As lie day"];
//Filtrar bandas que tenga 5 caracteres
var bandasCortas = bandas.filter(function (filtro){
    return filtro.length <= 5;
})
console.log(bandasCortas);

console.log("------------------------------")
console.log("------------------------------")