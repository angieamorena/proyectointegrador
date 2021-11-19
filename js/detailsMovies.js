let queryString = location.search; 

let qsToObject = new URLSearchParams(queryString); 

let id = qsToObject.get('id');


let url= `https://api.themoviedb.org/3/movie/${id}?api_key=3335fc92ac8e1b65144fc97f2d99d9c7`

fetch(url)
.then(function(response) {
  return response.json()
})
.then(function(data) {
  console.log(data);
  let generos = data.genres;
  let titulo = document.querySelector(".titulo")
  let imagen = document.querySelector(".imagen")
  let estreno = document.querySelector(".estreno")
  let rating = document.querySelector(".rating")
  let duracion = document.querySelector(".duracion")
  let sinopsis = document.querySelector(".sinopsis")
  let genero = document.querySelector(".genero")
  titulo.innerText+= data.title;
  imagen.src = `https://image.tmdb.org/t/p/w342${data.poster_path}`; 
  estreno.innerText= data.release_date; 
  rating.innerText= data.vote_average; 
  duracion.innerText= data.runtime + " minutos"; 
  sinopsis.innerText = data.overview; 
  let listageneros= '';
  for(let i=0; i<generos.length; i++ ){
    listageneros += `<a href="./detail-genres.html?id=${generos[i].id}">${generos[i].name}</a>, `;
  }
  genero.innerHTML= listageneros
  
//  agregar a peliculasFavoritas
    let peliculasFavoritas = [];
    localStorage.clear(); 

  // actualizar el array por si hay datos en el storage
  let recuperoStoragePelis = localStorage.getItem('peliculasFavoritas');

  if (recuperoStoragePelis != null){
    peliculasFavoritas = JSON.parse(recuperoStoragePelis); 
  }

  //capturo los datos 
  let linkFav = document.querySelector('.peliculasFavoritasDetalle'); 

  //si el id esta en el array de peliculasFavoritas 
  if(peliculasFavoritas.includes(id)){
  linkFav.innerText= "Quitar de peliculasFavoritas"; 
  }
    
  //cuando haga click
    linkFav.addEventListener('click', function(event){
    event.preventDefault();

    //para quitar de peliculasFavoritas 
    if(peliculasFavoritas.includes(id)){
      peliculasFavoritas.splice(peliculasFavoritas.indexOf(id),1)
      linkFav.innerText= "Agregar a peliculasFavoritas";
    }
    else {
    //pushear el id al array
      peliculasFavoritas.push(id);
      linkFav.innerText= "Quitar de peliculasFavoritas"; 
    }
    
    //guardar el array al storage 
    let peliculasFavoritasString = JSON.stringify(peliculasFavoritas)
    localStorage.setItem('peliculasFavoritas', peliculasFavoritasString);
    
    console.log(localStorage); 
    })
})
.catch(function(error) {
  console.log("Error: " + error);
})
