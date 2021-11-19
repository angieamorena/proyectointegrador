let queryString = location.search; 

let qsToObject = new URLSearchParams(queryString); 

let id = qsToObject.get('id');

let url= `https://api.themoviedb.org/3/tv/${id}?api_key=3335fc92ac8e1b65144fc97f2d99d9c7`

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
  let sinopsis = document.querySelector(".sinopsis")
  let genero = document.querySelector(".genero")
  titulo.innerText+= data.name;
  imagen.src = `https://image.tmdb.org/t/p/w342${data.poster_path}`; 
  estreno.innerText= data.first_air_date; 
  rating.innerText= data.vote_average; 
  sinopsis.innerText = data.overview; 
  let listageneros= ''
  for(let i=0; i<data.genres.length; i++ ){
    listageneros += `<a href="./detail-genres.html?id=${data.genres[i].id}">${data.genres[i].name}</a>, `;
  }
  genero.innerHTML= listageneros
  
//  agregar a seriesFavoritas
    let seriesFavoritas = [];
    localStorage.clear(); 

  // actualizar el array por si hay datos en el storage
  let recuperoStorageSeries = localStorage.getItem('seriesFavoritas');

  if (recuperoStorageSeries != null){
    seriesFavoritas = JSON.parse(recuperoStorageSeries); 
  }

  //capturo los datos 
  let linkFav = document.querySelector('.seriesFavoritasDetalle'); 

  //si el id esta en el array de seriesFavoritas 
  if(seriesFavoritas.includes(id)){
  linkFav.innerText= "Quitar de seriesFavoritas"; 
  }
    
  //cuando haga click
    linkFav.addEventListener('click', function(event){
    event.preventDefault();

    //para quitar de seriesFavoritas 
    if(seriesFavoritas.includes(id)){
      seriesFavoritas.splice(seriesFavoritas.indexOf(id),1)
      linkFav.innerText= "Agregar a seriesFavoritas";
    }
    else {
    //pushear el id al array
      seriesFavoritas.push(id);
      linkFav.innerText= "Quitar de seriesFavoritas"; 
    }
    
    //guardar el array al storage 
    let seriesFavoritasString = JSON.stringify(seriesFavoritas)
    localStorage.setItem('seriesFavoritas', seriesFavoritasString);
    
    console.log(localStorage); 
    })
})
.catch(function(error) {
  console.log("Error: " + error);
})
