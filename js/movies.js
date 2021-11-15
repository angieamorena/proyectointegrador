//peliculas populares
let url = ' https://api.themoviedb.org/3/movie/popular?api_key=3335fc92ac8e1b65144fc97f2d99d9c7'

fetch(url)
.then(function(response) {
  return response.json()
})
.then(function(data) {
  console.log(data);
  let info = data.results;
  let lista = document.querySelector(".peliculas")
  let peliculasPopulares= '';
  for(let i=0; i<5; i ++){
   peliculasPopulares+= `<article> 
   <p>Name: ${info[i].title} </p>
   <img src= "https://image.tmdb.org/t/p/w342${info[i].poster_path}" alt= '' />
    <a href= "./detailsMovies.html?id=${info[i].id}"> Ver mas</a>
    </article>`
  }
  lista.innerHTML=peliculasPopulares; 
})
.catch(function(error) {
  console.log("Error: " + error);
})

//lo mas visto en peliculas
let url3 = 'https://api.themoviedb.org/3/movie/top_rated?api_key=3335fc92ac8e1b65144fc97f2d99d9c7'

fetch(url3)
.then(function(response) {
  return response.json()
})
.then(function(data2) {
  console.log(data2);
  let info3 = data2.results;
  let lista3 = document.querySelector(".peliculas")
  let lasPeliculasMasValoradas= '';
  for(let i=0; i<5; i ++){
    lasPeliculasMasValoradas+= `<article> 
   <p>Name: ${info3[i].title} </p>
   <img src= "https://image.tmdb.org/t/p/w342${info3[i].poster_path}" alt= '' />
    <a href= "./detailsMovies.html?id=${info3[i].id}"> Ver mas</a>
    </article>`
  }
  lista3.innerHTML+=lasPeliculasMasValoradas; 
})
.catch(function(error) {
  console.log("Error: " + error);
})