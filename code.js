// Your Code Here!
let movieInfo = movies.map(movie => movieDetails.filter(details => details.title === movie.title));
let movieCatalog = [...movies, ...movieInfo].filter(movie => movie.title !== undefined);

let movieListDiv = document.getElementById("movieList");

let movieCompare = function(movie) {
    for (let detail of movieDetails) {
        if (movie.title === detail.title) {
            return detail.imageUrl;
        }
    }
}

let movieListRender = movieCatalog.forEach(movie => {
    for (let detail of movieDetails) {
        if (movie.title === detail.title) {
            movieListDiv.innerHTML += `
            <div class="movieDiv">
                <img src="${movieCompare(movie)}" width="150px">
                <h2>${movie.title}</h2>
                <p><strong>Starring</strong>: ${movie.cast}</p>
                <h6>Released: ${movie.year}</p>
            </div>`;
        }
    }
})

let titleSearchButton = document.getElementById("titleSearchButton");
let titleSearchBar = document.getElementById("titleSearchBar");

titleSearchButton.addEventListener("click", () => {
    movieListDiv.innerHTML = "";
    movieListRender = movieCatalog.filter(function(movie) {
        return movie.title.toLowerCase().includes(titleSearchBar.value.toLowerCase());
    });
    movieListRender.forEach(result => {
        for (let detail of movieDetails) {
            if (result.title === detail.title) {
                movieListDiv.innerHTML += `
                <div class="movieDiv">
                    <img src="${movieCompare(result)}" width="150px">
                    <h2>${result.title}</h2>
                    <p><strong>Starring</strong>: ${result.cast}</p>
                    <h6>Released: ${result.year}</p>
                </div>`;
            }
        }
    });
});

console.log("Movies:", movies);
console.log("MovieDetails:", movieDetails);