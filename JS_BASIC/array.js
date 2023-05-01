

// When we feel like sorting multiple values in one variable then 
// instead of var, we will use an Array.

// In JS, we haave an array class, and arrays are the prototype of 
// this class.


const myFriends =['piku','pinky','papa','babai'];


//if we want to check the length of the elements:

console.log(myFriends.length);

//get iteration of the array

// we use for loop to nevigate it 

console.log("-----for-------");


for(let i=0;i<myFriends.length;i++){
    console.log(myFriends[i]);
}

console.log("-----for...in-------");

for(let elements in myFriends){
    console.log(elements);
}

//It will return the index of the elements

console.log("-----for...of-------");

for(let elements of myFriends){
    console.log(elements);
}

//It will return the exact elements of the array

console.log("-----forEach()-------");

// Array.prototype.forEach()
// Calls a function for each elements in the Array. 


// using simple function 

myFriends.forEach( function(element, index, array){

        console.log(`${element}  ${index}  ${array}`);

})

// Actually it is a combination of for...in and for...of loop.
// Here we get all the information about the array.
// But here we cannot use break.

// using fat-arrow function 

myFriends.forEach((element, index, array)=>{
    console.log(element);
})

console.log("--------Searching and Filter in an Array--------");
