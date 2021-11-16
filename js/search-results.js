// Validando formularios
console.log("validando forms");

let formulario = document.querySelector('form');

let inputField = document.querySelector('.buscador');

let message = document.querySelector('.mensaje');

formulario.addEventListener('submit', function(evento){
    evento.preventDefault();
    
    //Que el campo no esté vacío
    if(inputField.value == ""){

        //Mostrar un mensaje al usuario
        message.innerText = "Completar"

    //Chequear si puso más de 3 caracteres.    
    } else if(inputField.value.length < 3){
        message.innerText = "Escriba al menos dos carcateres"
    } else {
        formulario.submit()
    }

})

//Cuando el usuario ingrese al campo => limpiar el mensaje de error.
inputField.addEventListener('focus', function(evento){
    console.log(evento)

    //Limpiar el mensaje de error
    message.innerText = "";

    //Limpie el valor que tenga el campo.
    this.value = ""; })
