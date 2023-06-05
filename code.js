// Your Code Here!
let movieInfo = movies.map(movie => movieDetails.filter(details => details.title === movie.title));
let movieCatalog = [...movies, ...movieInfo];
    

document.write(JSON.stringify(movieCatalog));

console.log("Movies:", movies);
console.log("MovieDetails:", movieDetails);