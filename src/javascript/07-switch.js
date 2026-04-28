

//Creamos una variable en este casp sera numerica
let menu=3;

//Definimos un switch basico, operado por numeros
//Aca se integran las opciones en los cases
//Tarea a realizar hasta la opcion 3
switch(menu){
    case 1:
        imprime ="Opcion 1";
        break;
    case 2:
        imprime = "Opcion 2";
        break;
    case 3:
        imprime = "Opcion 3";
        break;
    default:
        imprime="Opcion no definida"
}
console.log(imprime);


console.log("-----------------------------");
console.log("-----------------------------");

//Definimos una variable
var dia= "jueves";



//Definimos el Switch con una variable de texto
switch (dia){
    case "lunes":
        imprime2= "Este es el día " + dia;
        break;
    case "martes":
        imprime2= "Este es el día " + dia;
        break;
     case "miércoles":
        imprime2= "Este es el día " + dia;
        break;
    case "jueves":
        imprime2= "Este es el día " + dia;
        break;
    case "viernes":
        imprime2= "Este es el día " + dia;
        break;
    case "sábado":
        imprime2= "Fin de semana: " + dia;
        break;
    case "domingo":
        imprime2= "Fin de semana: " + dia;
        break;

    default:
        imprime2= "Día no válido";
        break;
    }
    console.log(imprime2);
    console.log("----------------------------------------");
    console.log("----------------------------------------");

    var edad = 17;
    var esNino = edad < 13;
    var esAdolescente = edad >= 13 && edad < 10;
    var esAdulto = edad >= 18 && edad < 65;
    var esAdultoMayor = edad >= 65;
    console.log(typeof (esNino));
    switch (true){
        case esNino:
            parametros = "Eres un niño";
            break;
        case esAdolescente:
            parametros= "Eres adolescente";
            break;
        case esAdulto:
            parametros= "Eres adulto";
            break;
        case esAdultoMayor:
            parametros= "Eres adulto mayor";
            break; 
        default:
            parametros = "Edad no valida";
            break;
    }
    console.log(parametros);