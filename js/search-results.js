// //validar formulario//
console.log("validando forms");

let formulario = document.querySelector('form');
console.log(formulario)
let inputField = document.querySelector('.buscar');
let message = document.querySelector('.message');

formulario.addEventListener('submit', function(evento){
    evento.preventDefault();
    
    //Que el campo no esté vacío
    if(inputField.value == ""){
        //Mostrar un mensaje al usuario
        message.innerText = "El campo es obligatorio"
    //Chequear si puso más de 3 caracteres.    
    } else if(inputField.value.length < 3){
        message.innerText = "Ingresar al menos 3 caracteres"
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
    this.value = "";
})



let queryString = window.location.search; //agarro toda la url//

let queryObject = new URLSearchParams (queryString); 
console.log (queryObject);
// en query object transformo la url entera para poder agarrar los datos requeridos (los que la persona busco)//

let search = queryObject.get('buscar'); //agarraste la url y la separaste y podes ahora buscar puntualmente//
console.log (search)

let url = `https://api.themoviedb.org/3/search/multi?api_key=93e508f17b507f9418365fe0a4069252&language=en-US&query=${search}&page=1&include_adult=false` //destaca el resultado de la busquedA//

let containerResults = document.querySelector ('.contenedorBusqueda'); //se captura el lugar donde se va meter la busqueda//
let searchTitle = document.querySelector ('.buscadorTitulo')


  // Filtro: TODOS [Series, Peliculas y Actores]
      
  fetch (url)
  .then (datos=>datos.json() )
  .then (respuesta => {
  
      console.log (respuesta);
      let results = ''
  
      respuesta.results.forEach ((multi, index) => {
        // Series //
        if (multi.media_type == "tv"){
          results += 
          `<article>
          <a href="detailsSeries.html?id=${multi.id}">${multi.name}</a> <br>
          <img src="https://image.tmdb.org/t/p/w500/${multi.poster_path}"> <br>
          </article>
         ` 
        
         containerResults.innerHTML= results
        }
  
        // Películas //
        else if (multi.media_type == "movie"){
          results +=
          `<article>
          <a href="detailsMovies.html?id=${multi.id}">${multi.title}</a> <br>
          <img src="https://image.tmdb.org/t/p/w500/${multi.poster_path}"> <br>
          </article>
          ` 
  
              containerResults.innerHTML= results
            }
          
          // Personas 
          else if (multi.media_type == "person"){
              
              results += 
              `<article>
              <a>${multi.name}</a> <br>
              <img src="https://image.tmdb.org/t/p/w500/${multi.profile_path}"> <br>
              </article>` 
              
              containerResults.innerHTML = results
            }
  
            searchTitle.innerHTML = search
          })
        })
         .catch(function(error){
          console.log('El error fué: ' + error);
      })
      
