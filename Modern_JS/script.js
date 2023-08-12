const fs= require("fs");


const rawData = fs.readFileSync('movies.json');
const movies = JSON.parse(rawData);



// movies.forEach(movie => {
//     console.log("Movie Name: ",movie.Title);
//     console.log("image: ",movie.Images[0])
// });

console.log(movies[2].Images[2]);