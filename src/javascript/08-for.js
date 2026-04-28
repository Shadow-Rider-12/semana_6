//Definimos una variable numerica
var numero = 10;

//Utilizamos el for para incrementar en 1 cada numero
for (var i = 1; i <= numero; i++){
    console.log("Numero: ", i);
}
console.log("--------------------");

for (var i = 10; i >= 1; i--){
    console.log("Numero: ", i);
}
console.log("--------------------");

//Buscamos el numero par, pero notar que estamos sumando 2
for(var i=2; i <= numero; i+= 2){
    console.log("Par: ", i);
}
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