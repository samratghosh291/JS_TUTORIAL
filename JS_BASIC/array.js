

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

console.log("----using Function----");

// using simple function 

myFriends.forEach( function(element, index, array){

        console.log(`${element}  ${index}  ${array}`);

})


// Actually it is a combination of for...in and for...of loop.
// Here we get all the information about the array.
// But here we cannot use break.


console.log("----using Fat-Arrow----");

// using fat-arrow function 

myFriends.forEach((element, index, array)=>{

    console.log(`${element}  ${index}  ${array}\n`);

});

console.log("--------Searching and Filter in an Array--------\n");

//  Array.prototype.indexOf();

//Returns the first (least) index of an elements within the array equal
// to an element, or -1 if none of is found. It search the element from 
// the 0th index Number. 
                   



console.log("--------Push() in an Array--------\n");


// Array.prototype.push();

// The push() method adds one or more elements to the  
//end of an array and return the new length of the Array. 

const animal =['goat','cow','pigs'];



console.log(animal.push('cat','dog'))  //5
console.log(animal);   //[ 'cat', 'goat', 'cow', 'pigs' ]

  
console.log("--------unshift() in an Array--------\n");


// Array.prototype.unshift();

// The push() method adds one or more elements to the  
//begining of an array and return the new length of the Array. 

const animal_1 =['goat','cow','pigs'];

animal_1.unshift('cat');

console.log(animal_1);


// ex-2

const num =[1,2,3,4];
console.log(num.unshift(12));  //5
console.log(num);  //[ 12, 1, 2, 3, 4 ]



// Array.prototype.pop();

console.log("--------pop() in an Array--------\n");


// The Pop() methods remove the last element of an array.
// It return the popped elements. 

const veg =['cabbage','broccoli','cauliflower','tomato'];
console.log(veg);
console.log(veg.pop());
console.log(veg);

