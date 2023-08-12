const fs= require("fs");

//read the file synchronusly
const rawData = fs.readFileSync('movies.json');
//convert json into js object file for better handelling
const movies = JSON.parse(rawData);



//fetch data from js object is like worked with array
//index start from 0 
//js cannot fetch data from json directly
console.log(movies[2].Images[2]);  //img-11
console.log(movies[1].Genre);  //Drama, Horror, Sci-Fi
console.log(movies[1]);
// {
//     Title: 'I Am Legend',
//     Year: '2007',
//     Rated: 'PG-13',
//     Released: '14 Dec 2007',
//     Runtime: '101 min',
//     Genre: 'Drama, Horror, Sci-Fi',
//     Director: 'Francis Lawrence',
//     Images: [ 'img-5', 'img-6', 'img-7', 'img-8' ]
//   }



//convert js object to json
const data=JSON.stringify(movies);

//try to fetch data from json 
console.log(data[1].Genre); //undefined