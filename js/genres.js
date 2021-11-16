//PELICULAS//

let peliculasGenero1 ='https://api.themoviedb.org/3/genre/movie/list?api_key=93e508f17b507f9418365fe0a4069252&language=es'

fetch(peliculasGenero1)
.then(function(response) {
  return response.json()
})

.then(function(data) {

    console.log(data);

    let info = data.genres;

    let genres = document.querySelector(".listaGeneroPelis")

    let peliculasGenero= '';

    for(let i=0; i< info.length ; i ++){

        peliculasGenero += `

        <a href="./detail-genres.html?id=${info[i].id}"> 

        <li> <h3 class = "itemListaGeneroPelis">${info[i].name}</h3> </li>

        </a>
    
    `}

  genres.innerHTML=peliculasGenero; 

})

.catch(function(error) {
  console.log("Error: " + error);
})


//SERIES//

let seriesGenero2 = 'https://api.themoviedb.org/3/genre/tv/list?api_key=93e508f17b507f9418365fe0a4069252&language=es'

fetch(seriesGenero2)
.then(function(response) {
  return response.json()
})

.then(function(data) {

  console.log(data);

  let info = data.genres;

  let genres = document.querySelector(".listaGeneroSeries")

  let seriesGenero= '';

  for(let i=0; i< info.length ; i ++){

      seriesGenero += `

      <a href="detail-genres.html?id=${info[i].id}"> 

      <li> <h3 class = "itemlistaGeneroSeries">${info[i].name}</h3> </li>

      </a>
  
  `}

  gener.innerHTML=seriesGenero; 

})

.catch(function(error) {
  console.log("Error: " + error);
})