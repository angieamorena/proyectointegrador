let queryString = location.search; 

let qsToObject = new URLSearchParams(queryString); 

let id = qsToObject.get('id');

let url= `https://api.themoviedb.org/3/discover/movie?api_key=924a6f16470b17afdd20524ec31c09be&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${id}&with_watch_monetization_types=flatrate`

fetch(url)
.then(function(response) {
  return response.json()
})
.then(function(data) {
  console.log(data);
  
  // titulo.innerText+= data.title;
  // imagen.src = `https://image.tmdb.org/t/p/w342${data.poster_path}`; 
  // estreno.innerText= data.release_date; 
  // rating.innerText= data.vote_average; 
  // duracion.innerText= data.runtime + " minutos"; 
  // sinopsis.innerText = data.overview; 
  // let listageneros= ''
  // for(let i=0; i<data.genres.length; i++ ){
  //   listageneros += `<a href="./detail-genres.html#comediap">${data.genres[i].name}</a>, `;
  // }
  // genero.innerHTML= listageneros
})
.catch(function(error) {
  console.log("Error: " + error);
})