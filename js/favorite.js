let recuperoStoragePelis = localStorage.getItem('favoritosPelis');
let recuperoStorageSeries = localStorage.getItem('favoritosSeries');

// let favoritosPelis = JSON.parse(recuperoStoragePelis);
// let favoritosSeries = JSON.parse(recuperoStorageSeries);

let lista = document.querySelector('.lista');
let seriesFavoritas = [];
let peliculasFavoritas = [];

/*
if (favoritos == null || favoritos.length == 0) {
    lista.innerHTML = '<h2>No hay series o peliculas seleccionadas</h2>';
}
*/
if(recuperoStorageSeries){
    seriesFavoritas = JSON.parse(recuperoStorageSeries)
};
console.log(seriesFavoritas);

const key= "3335fc92ac8e1b65144fc97f2d99d9c7";

//series
for (let i = 0; i < seriesFavoritas.length; i++) {
    //llamar a la api para obtener datos de cada id
    let urlSeries = `https://api.themoviedb.org/3/movie/${seriesFavoritas[i]}?api_key=70cd756c5bc6ca141759c814f5357912`;

    fetch(urlSeries)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let seriesFavoritas = '';
            for (let i = 0; i < 5; i++) {
                seriesFavoritas += `<article> 
                                    <p>Name: ${data[i].title} </p>
                                    <img src= "https://image.tmdb.org/t/p/w342${data[i].poster_path}" alt= '' />
                                    <a href= "./detailsMovies.html?id=${data[i].id}"> Ver mas</a>
                                   </article>`
            }
            lista.innerHTML = seriesFavoritas;
        })
        .catch(function (error) {
            console.log(error);
        })
}


//peliculas

for (let i = 0; i < peliculasFavoritas.length; i++) {

    let urlPeliculas = `https://api.themoviedb.org/3/movie/${peliculasFavoritas[i]}?api_key=70cd756c5bc6ca141759c814f5357912`



    fetch(urlPeliculas)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            let lista = document.querySelector(".favouritePelis")
            let peliculasFavoritas = '';
            
                peliculasFavoritas += `<article> 
                    <p>Name: ${data.title} </p>
                    <img src= "https://image.tmdb.org/t/p/w342${data.poster_path}" alt= '' />
                    <a href="./detail-genres.html?id=${data.genres[0].id}">${data.genres[0].name}</a>, 
                                 </article>`
            
            lista.innerHTML = peliculasFavoritas;
        })
        .catch(function (error) {
            console.log(error);
        })
}
