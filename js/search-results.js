let formulario = document.querySelector('form');
let inputField = document.querySelector('#buscador');
let message = document.querySelector('.message');
console.log(formulario)

formulario.addEventListener('submit', function(event){
    event.preventDefault();
    
    if(inputField.value.length == 0 ){ 
        
        message.innerText = "Completar el campo"

    } else if(inputField.value.length < 3){
        message.innerText = "Poner 3 caracteres como minimo"
    } else {
        formulario.submit()
    }
})




let queryString = window.location.search; 

let queryObject = new URLSearchParams (queryString); 
console.log (queryObject);


let search = queryObject.get('buscar'); 
console.log (search)

let url = `https://api.themoviedb.org/3/search/multi?api_key=93e508f17b507f9418365fe0a4069252&language=en-US&query=${search}&page=1&include_adult=false` //destaca el resultado de la busquedA//

let containerResults = document.querySelector ('.contenedorBusqueda'); 
let searchTitle = document.querySelector ('.buscadorTitulo')


//Todas las opciones juntas//
      
  fetch (url)
  .then (datos=>datos.json() )
  .then (respuesta => {
  
      console.log (respuesta);
      let results = ''
  
      respuesta.results.forEach ((multi, index) => {
        
        if (multi.media_type == "tv"){
          results += 
          `<article>
          <a href="detailsSeries.html?id=${multi.id}">${multi.name}</a> <br>
          <img src="https://image.tmdb.org/t/p/w500/${multi.poster_path}"> <br>
          </article>
         ` 
        
         containerResults.innerHTML= results
        }
  
        
        else if (multi.media_type == "movie"){
          results +=
          `<article>
          <a href="detailsMovies.html?id=${multi.id}">${multi.title}</a> <br>
          <img src="https://image.tmdb.org/t/p/w500/${multi.poster_path}"> <br>
          </article>
          ` 
  
              containerResults.innerHTML= results
            }
          
          
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
      
