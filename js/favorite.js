
let recuperoStoragePelis = localStorage.getItem('peliculasFavoritas');
let recuperoStorageSeries = localStorage.getItem('seriesFavoritas');

let favoritosPelis = JSON.parse(recuperoStoragePelis);
let favoritosSeries = JSON.parse(recuperoStorageSeries);

let listaPeliculas = document.querySelector('.favouritePelis');
let listaSeries=  document.querySelector('.favouriteSeries');

let seriesFavoritas = [];
let peliculasFavoritas = [];

//series
if (favoritosSeries == null || favoritosSeries.length == 0) {
    listaSeries.innerHTML = '<h2>No hay series seleccionadas</h2>';
}
// // if(recuperoStorageSeries){
// //     seriesFavoritas = JSON.parse(recuperoStorageSeries)
// // };
// // console.log(seriesFavoritas);

const seriesKey= "70cd756c5bc6ca141759c814f5357912";

for (let i = 0; i < favoritosSeries.length; i++) {
    let urlSeries = `https://api.themoviedb.org/3/tv/${favoritosSeries[i]}?api_key=${seriesKey}`;

    fetch(urlSeries)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            let seriesFavoritas = '';
           
                seriesFavoritas += `<article> 
                                    <p>Name:${data.name}</p>
                                    <img src="https://image.tmdb.org/t/p/w342${data.poster_path}" alt=''/>
                                    <a href="./detailsMovies.html?id=${data.id}"> Ver mas</a>
                                   </article>`
            
            listaSeries.innerHTML += seriesFavoritas;
        })
        .catch(function (error) {
            console.log(error);
        })
}

//peliculas
if (favoritosPelis == null || favoritosPelis.length == 0) {
    listaPeliculas.innerHTML = '<h2>No hay peliculas seleccionadas</h2>';
}
// if(recuperoStoragePelis){
//     peliculasFavoritas = JSON.parse(recuperoStoragePelis)
// };
// console.log(peliculasFavoritas);
const peliculasKey="70cd756c5bc6ca141759c814f5357912";

for (let i = 0; i < favoritosPelis.length; i++) {
    let urlPeliculas = `https://api.themoviedb.org/3/movie/${favoritosPelis[i]}?api_key=${peliculasKey}`;

    fetch(urlPeliculas)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            let peliculasFavoritas = '';
            
              peliculasFavoritas += `<article> 
                                         <p>Name:${data.title}</p>
                                         <img src="https://image.tmdb.org/t/p/w342${data.poster_path}" alt=''/>
                                         <a href="./detailsMovies.html?id=${data.id}"> Ver mas</a>
                                       </article>`
            
            listaPeliculas.innerHTML += peliculasFavoritas;
        })
        .catch(function (error) {
            console.log(error);
        })
}



/*let recuperoStoragePelis = localStorage.getItem('favoritosPelis');
let recuperoStorageSeries = localStorage.getItem('favoritosSeries');

let favoritosPelis = JSON.parse(recuperoStoragePelis);
let favoritosSeries = JSON.parse(recuperoStorageSeries);

let lista = document.querySelector('.lista');
let seriesFavoritas = [];
let peliculasFavoritas = [];

//series
if(favoritosSeries== null || favoritosSeries.length == 0){
    lista.innerHTML='<h2>No hay series seleccionadas</h2>';
}

for(let i=0; i<favoritosSeries.length; i++){
    //llamar a la api para obtener datos de cada id
    let urlSeries = `https://api.themoviedb.org/3/tv/${favoritosSeries[i]}?api_key=70cd756c5bc6ca141759c814f5357912`;

    fetch(urlSeries)
        .then(function(response){
            return response.json();
        })
        .then( function(data){
            console.log(data);
            seriesFavoritas += `<article>
                                    <h2>${data.name}</h2>
                                    <img src=${data.poster_path}>
                                    <a href="./detail-genres.html?id=${data.genres[i].id}">${data.genres[i].name}</a>
                                </article>`

            lista.innerHTML = seriesFavoritas;
        })
        .catch( function(error){
            console.log(error);
        })
}
    
//peliculas
if( favoritosPelis== null || favoritosPelis.length == 0){
    lista.innerHTML = '<h2>No hay peliculas seleccionadas</h2>';
}

for(let i=0; i<favoritosPelis.length; i++){
    //llamar a la api para obtener datos de cada id
    let urlPeliculas = `https://api.themoviedb.org/3/movie/${peliculasFavoritas[i]}?api_key=70cd756c5bc6ca141759c814f5357912`;

    fetch(urlPeliculas)
        .then(function(response){
            return response.json();
        })
        .then( function(data){
            
            peliculasFavoritas += `<article>
                                      <h2>${data.title}</h2>
                                      <img src=${data.poster_path}>
                                      <a href="./detail-genres.html?id=${generos[i].id}">${generos[i].name}</a>
                                   </article>`

            lista.innerHTML = peliculasFavoritas;
        })
        .catch( function(error){
            console.log(error);
        })
}
    */