//peliculas populares
let url = ' https://api.themoviedb.org/3/movie/popular?api_key=3335fc92ac8e1b65144fc97f2d99d9c7'

fetch(url)
.then(function(response) {
  return response.json()
})
.then(function(data) {
  console.log(data);
  let info = data.results;
  let lista = document.querySelector(".homePeliculasPopulares")
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


//series populares
let url2 = 'https://api.themoviedb.org/3/tv/popular?api_key=3335fc92ac8e1b65144fc97f2d99d9c7'

fetch(url2)
.then(function(response) {
  return response.json()
})
.then(function(data2) {
  console.log(data2);
  let info2 = data2.results;
  let lista2 = document.querySelector(".homeSeriesPopulares")
  let seriesPopulares= '';
  for(let i=0; i<5; i ++){
   seriesPopulares+= `<article> 
                         <p>Name: ${info2[i].name} </p>
                         <img src= "https://image.tmdb.org/t/p/w342${info2[i].poster_path}" alt= '' />
                         <a href= "./detailsSeries.html?id=${info2[i].id}"> Ver mas</a>
                      </article>`
  }
  lista2.innerHTML=seriesPopulares; 
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
  let lista3 = document.querySelector(".homeLasPeliculasMasValoradas")
  let lasPeliculasMasValoradas= '';
  for(let i=0; i<5; i ++){
    lasPeliculasMasValoradas+= `<article> 
   <p>Name: ${info3[i].title} </p>
   <img src= "https://image.tmdb.org/t/p/w342${info3[i].poster_path}" alt= '' />
    <a href= "./detailsMovies.html?id=${info3[i].id}"> Ver mas</a>
    </article>`
  }
  lista3.innerHTML=lasPeliculasMasValoradas; 
})
.catch(function(error) {
  console.log("Error: " + error);
})


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
