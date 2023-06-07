// Your Code Here!
let movieInfo = movies.map(movie => movieDetails.filter(details => details.title === movie.title));
let movieCatalog = [...movies, ...movieInfo].filter(movie => movie.title !== undefined);

document.write(JSON.stringify(movieCatalog));

// let movieListDiv = document.getElementById("movieList");

// let movieListRender = movieCatalog.forEach(movie => {
//     movieListDiv.innerHTML += `
//         <div class="movieDiv">
//             <img src="${movie.imageUrl}" width="100px">
//             <h2>${movie.title}</h2>
//             <p><strong>Starring</strong>: ${movie.cast}</p>
//             <h6>Released: ${movie.year}</p>
//         </div>`;
// })

// let searchButton = document.getElementById("searchButton");
// let searchBar = document.getElementById("searchBar");

// searchButton.addEventListener("click", () => {
//     movieListDiv.innerHTML = "";
//     movieListRender = movieCatalog.filter(function(movie) {
//         return movie.title.toLowerCase().includes(searchBar.value.toLowerCase());
//     });
//     movieListRender.forEach(result => {
//         movieListDiv.innerHTML += `
//             <div class="movieDiv">
//                 <img src="${result.imageUrl}" width="100px">
//                 <h2>${result.title}</h2>
//                 <p><strong>Starring</strong>: ${result.cast}</p>
//                 <h6>Released: ${result.year}</p>
//             </div>`;
//     });
// });

// console.log("Movies:", movies);
// console.log("MovieDetails:", movieDetails);