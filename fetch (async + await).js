// Fetch (async + await)
const btnSearch = document.querySelector('.search-button');
btnSearch.addEventListener('click', async function() {

    const inputKeyword = document.querySelector('.input-keyword');
    const movies = await getMovies(inputKeyword.value);
    updateUI(movies)
});

function getMovies(keyword) {
    return fetch('https://www.omdbapi.com/?apikey=b9744225&s=' + keyword)
    .then(response => response.json())
    .then(response => response.Search);
}

function updateUI(movies) {
    let cards = '';
    movies.forEach(movie => cards += showCards(movie));
    const movieContainer = document.querySelector('.movie-container')
    movieContainer.innerHTML = cards;
}



// event binding
document.addEventListener('click', async function(e) {
    if( e.target.classList.contains('btnDetail')) {

        // ketika tombol detail di click
        const imdbid = e.target.dataset.imdbid
        const movieDetail = await getMovieDetails(imdbid)
        updateUIDetail(movieDetail)
    }
})

function getMovieDetails(imdbid) {
    return fetch('https://www.omdbapi.com/?apikey=b9744225&i=' + imdbid)
    .then(Response => Response.json())
    .then(m => m);
}

function updateUIDetail(m) {
        const movieDetail = showDetails(m);
        const modalBody = document.querySelector('.modal-body');
        modalBody.innerHTML = movieDetail;
}



function showCards(movie) {
    return `<div class="col-md-4 my-3">
                <div class="card">
                    <img src="${movie.Poster}" class="card-img-top" alt="${movie.Title}">
                    <div class="card-body">
                    <h5 class="card-title">${movie.Title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${movie.Year}</h6>
                    <a href="#" class="btn btn-primary btnDetail" data-bs-toggle="modal" data-bs-target="#movieDetails" data-imdbid="${movie.imdbID}">Show Details</a>
                    </div>
                </div>
            </div>`
}

function showDetails(m) {
    return `<div class="container-fluid">
                <div class="row">
                    <div class="col-md-3">
                        <img src="${m.Poster}" alt="" class="img-fluid">
                    </div>
                    <div class="col-md">
                    <ul class="list-group col-12">
                        <li class="list-group-item"><h4>${m.Title} (${m.Year})</h4></li>
                        </ul>
                        <ul class="list-group">
                        <li class="list-group-item"><strong>Writer :</strong></li>
                        <li class="list-group-item">${m.Writer}</li>
                    </ul>
                    <ul class="list-group">
                        <li class="list-group-item"><strong>Language :</strong></li>
                        <li class="list-group-item">${m.Language}</li>
                    </ul>
                        <ul class="list-group">
                        <li class="list-group-item"><strong>Released :</strong></li>
                        <li class="list-group-item">${m.Released}</li>
                        </ul>
                        <ul class="list-group">
                        <li class="list-group-item"><strong>Actors :</strong></li>
                        <li class="list-group-item">${m.Actors}</li>
                        </ul>
                        <ul class="list-group">
                        <li class="list-group-item"><strong>Plot :</strong></li>
                        <li class="list-group-item">${m.Plot}</li>
                        </ul>
                    </div>
                </div>
            </div>`
}