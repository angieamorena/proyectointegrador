let recuperoStorage = localStorage.getItem('favorite');
let favoritos = JSON.parse(recuperoStorage);

let lista = document.querySelector('.lista');
let seriesFavoritas = '';
let peliculasFavoritas = '';

if (favoritos == null || favoritos.length == 0) {
    lista.innerHTML = '<h2>No hay series o peliculas seleccionadas</h2>';
}

//series
for (let i = 0; i < favoritos.length; i++) {
    //llamar a la api para obtener datos de cada id
    let urlSeries = `https://api.themoviedb.org/3/tv/${favorite[i]}?api_key=3335fc92ac8e1b65144fc97f2d99d9c7`



    fetch(urlSeries)
        .then(function (response) {
            return response.json();
        })
        .then(function (data2) {
            console.log(data2);
            let info2 = data2.results;
            let lista2 = document.querySelector(".favouriteSeries")
            let seriesFavoritas = '';
            for (let i = 0; i < 5; i++) {
                seriesFavoritas += `<article> 
                                    <p>Name: ${info2[i].title} </p>
                                    <img src= "https://image.tmdb.org/t/p/w342${info2[i].poster_path}" alt= '' />
                                    <a href= "./detailsMovies.html?id=${info2[i].id}"> Ver mas</a>
                                   </article>`
            }
            lista.innerHTML = seriesFavoritas;
        })
        .catch(function (error) {
            console.log(error);
        })
}

//peliculas

for (let i = 0; i < favoritos.length; i++) {

    let urlPeliculas = `https://api.themoviedb.org/3/movie/${favoritos[i]}?api_key=3335fc92ac8e1b65144fc97f2d99d9c7`



    fetch(urlPeliculas)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            let info = data.results;
            let lista = document.querySelector(".favouritePeliculas")
            let peliculasFavoritas = '';
            for (let i = 0; i < 5; i++) {
                peliculasFavoritas += `<article> 
                    <p>Name: ${info[i].title} </p>
                    <img src= "https://image.tmdb.org/t/p/w342${info[i].poster_path}" alt= '' />
                    <a href= "./detailsMovies.html?id=${info[i].id}"> Ver mas</a>
                                   </article>`
            }
            lista.innerHTML = peliculasFavoritas;
        })
        .catch(function (error) {
            console.log(error);
        })
}
