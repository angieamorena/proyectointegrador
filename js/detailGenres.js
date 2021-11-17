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
  let peliculasGenero= document.querySelector(".peliculasGenero")
  let listageneros= ''
  for(let i=0; i<data.results.length; i++ ){
    listageneros += `<article> 
    <p>${data.results[i].title} </p>
    <img src= "https://image.tmdb.org/t/p/w342${data.results[i].poster_path}" alt= '' />
     <a href= "./detailsSeries.html?id=${data.results[i].id}"> Ver mas</a>
     </article>`;
  }
  peliculasGenero.innerHTML= listageneros; 
})
.catch(function(error) {
  console.log("Error: " + error);
})

let url2 = `https://api.themoviedb.org/3/discover/tv?api_key=924a6f16470b17afdd20524ec31c09be&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&&with_genres=${id}&with_watch_monetization_types=flatrate`
fetch(url2)
.then(function(response) {
  return response.json()
})
.then(function(data) {
  console.log(data);
  let seriesGenero= document.querySelector(".generoDetalleSeries")
  let listageneros= '';
  for(let i=0; i<data.results.length; i++ ){
    listageneros += `<article> 
    <p>${data.results[i].original_name} </p>
    <img src= "https://image.tmdb.org/t/p/w342${data.results[i].poster_path}" alt= '' />
     <a href= "./detailsSeries.html?id=${data.results[i].id}"> Ver mas</a>
     </article>`;
  }
  seriesGenero.innerHTML= listageneros; 
})
.catch(function(error) {
  console.log("Error: " + error);
})

let URLparaElTitulo = `https://api.themoviedb.org/3/genre/${id}?api_key=924a6f16470b17afdd20524ec31c09be&language=es`;

fetch(URLparaElTitulo)
.then(function(response) {
  return response.json()
})
.then(function(data) {
  console.log(data);
  let titulo = document.querySelector(".titulo")
  titulo.innerText+= data.name;
})
.catch(function(error) {
  console.log("Error: " + error);
})