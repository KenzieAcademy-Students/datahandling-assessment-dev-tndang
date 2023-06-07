// Your Code Here!
let movieInfo = movies.map(movie => movieDetails.filter(details => details.title === movie.title));
let movieCatalog = [...movies, ...movieInfo];

let movieListDiv = document.getElementById("movieList");
let movieListRender = movieCatalog
    .filter(movie => movie.title !== undefined)
    .forEach(movie => {
    movieListDiv.innerHTML += `<li>${movie.title}</li>`
})

// document.write(JSON.stringify(movieCatalog));

console.log("Movies:", movies);
console.log("MovieDetails:", movieDetails);