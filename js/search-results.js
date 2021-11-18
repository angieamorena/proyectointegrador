let queryString = window.location.search; //agarro toda la url//

let queryObject = new URLSearchParams (queryString); 
console.log (queryObject);
// en query object transformo la url entera para poder agarrar los datos requeridos (los que la persona busco)//

let search = queryObject.get('buscar'); //agarraste la url y la separaste y podes ahora buscar puntualmente//
console.log (search)

let url = `https://api.themoviedb.org/3/search/multi?api_key=93e508f17b507f9418365fe0a4069252&language=en-US&query=${search}&page=1&include_adult=false` //destaca el resultado de la busquedA//

let containerResults = document.querySelector ('.contenedorBusqueda'); //se captura el lugar donde se va meter la busqueda//
let searchTitle = document.querySelector ('.buscadorTitulo')

  // Filtro: TODOS [MOVIES + SERIES + PERSONAS]
      
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
          <a href="detailsMovies.html?id=${multi.id}">${multi.title}}</a> <br>
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
      
