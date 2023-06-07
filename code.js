// Your Code Here!
let movieInfo = movies.map(movie => movieDetails.filter(details => details.title === movie.title));
let movieCatalog = [...movies, ...movieInfo].filter(movie => movie.title !== undefined);

let movieListDiv = document.getElementById("movieList");
let movieListRender = movieCatalog.forEach(movie => {
    movieListDiv.innerHTML += `<li>${movie.title}</li>`
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