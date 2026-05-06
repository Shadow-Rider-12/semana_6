//La funcion principal: Ella tiene el mensaje, pero no sabe que hacer con el.
function obtenerMensaje(callback){
    const texto = "¡Clase de JS terminada!";
    callback(texto); //Le pasa el texto a la funcion que tu le envies
}

//Opcion A: Solo imprimirlo
obtenerMensaje((m) => console.log(m));
//Opcion B: Alertamos (aparece una ventana en el navegador)
obtenerMensaje((m) => alert(m));
