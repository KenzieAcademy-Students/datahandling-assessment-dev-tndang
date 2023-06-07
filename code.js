// Your Code Here!
let movieInfo = movies.map(movie => movieDetails.filter(details => details.title === movie.title));
let movieCatalog = [...movies, ...movieInfo].filter(movie => movie.title !== undefined);

let movieListDiv = document.getElementById("movieList");
// let movieListDivID = "";

let movieListRender = movieCatalog.forEach(movie => {
    // movieListDivID = `${movie.title.toLowerCase()}`.replace(/[^a-z0-9]+/ig, "");
    movieListDiv.innerHTML += `<div class="movieDiv">${movie.title}</div>`;
})

let searchButton = document.getElementById("searchButton");
let searchBar = document.getElementById("searchBar");

searchButton.addEventListener("click", () => {
    movieListDiv.innerHTML = "";
    movieListRender = movieCatalog.filter(function(movie) {
        return movie.title.toLowerCase().includes(searchBar.value.toLowerCase());
    });
    movieListRender.forEach(result => {
        movieListDiv.innerHTML += `<li>${result.title}</li>`
    });
});

// document.write(JSON.stringify(movieCatalog));

console.log("Movies:", movies);
console.log("MovieDetails:", movieDetails);