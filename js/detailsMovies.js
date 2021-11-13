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
  let listageneros= ''
  for(let i=0; i<data.genres.length; i++ ){
    listageneros += `<a href="./detail-genres.html#comediap">${data.genres[i].name}</a>, `;
  }
  genero.innerHTML= listageneros
  
//  agregar a favoritos
    let favoritos = [];
    localStorage.clear(); 

  // actualizar el array por si hay datos en el storage
  let recuperoStorage = localStorage.getItem('favoritos');

  if (recuperoStorage != null){
    favoritos = JSON.parse(recuperoStorage); 
  }

  //capturo los datos 
  let linkFav = document.querySelector('.favoritosDetalle'); 

  //si el id esta en el array de favoritos 
  if(favoritos.includes(id)){
  linkFav.innerText= "Quitar de favoritos"; 
  }
    
  //cuando haga click
    linkFav.addEventListener('click', function(event){
    event.preventDefault();

    //para quitar de favoritos 
    if(favoritos.includes(id)){
      favoritos.splice(favoritos.indexOf(id),1)
      linkFav.innerText= "Agregar a favoritos";
    }
    else {
    //pushear el id al array
      favoritos.push(id);
      linkFav.innerText= "Quitar de favoritos"; 
    }
    
    //guardar el array al storage 
    let favoritosString = JSON.stringify(favoritos)
    localStorage.setItem('favoritos', favoritosString);
    
    console.log(localStorage); 
    })
})
.catch(function(error) {
  console.log("Error: " + error);
})
