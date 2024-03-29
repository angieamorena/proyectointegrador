//series
let recuperoStorageSeries = localStorage.getItem('seriesFavoritas');
let favoritosSeries = JSON.parse(recuperoStorageSeries);

let listaSeries=  document.querySelector('.favoriteSeries');
let seriesFavoritas = [];

if (favoritosSeries == null || favoritosSeries.length == 0) {
    listaSeries.innerHTML = '<h2>No hay series seleccionadas</h2>';
}

for (let i = 0; i < favoritosSeries.length; i++) {
    let urlSeries = `https://api.themoviedb.org/3/tv/${favoritosSeries[i]}?api_key=70cd756c5bc6ca141759c814f5357912`;

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
                                    <a href="./detailsSeries.html?id=${data.id}"> Ver mas</a>
                                   </article>`
            
            listaSeries.innerHTML += seriesFavoritas;
        })
        .catch(function (error) {
            console.log(error);
        })
}


let recuperoStoragePelis = localStorage.getItem('peliculasFavoritas');
let favoritosPelis = JSON.parse(recuperoStoragePelis);
let listaPeliculas = document.querySelector('.favoritePelis');
let peliculasFavoritas = [];
//peliculas
if (favoritosPelis == null || favoritosPelis.length == 0) {
    listaPeliculas.innerHTML = '<h2>No hay peliculas seleccionadas</h2>';
}

for (let i = 0; i < favoritosPelis.length; i++) {
    let urlPeliculas = `https://api.themoviedb.org/3/movie/${favoritosPelis[i]}?api_key=70cd756c5bc6ca141759c814f5357912`;

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
