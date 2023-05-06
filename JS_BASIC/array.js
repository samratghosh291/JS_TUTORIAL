

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


console.log("--------Chellange Time--------\n");

// 1. Add Dec at the end of an array?
// 2. What is the return value of special method?
// 3. Update march to March (update) ?
// 4. Delete June from an array ?

const months = ['Jan','march','April','June','July'];

console.log("--------Splice method()--------\n");

// Array.prototype.splice()
//Add and/or removes elements from an array.

// 1. Add Dec at the end of an array?
// 2. What is the return value of special method?
// 3. Update march to March (update) ?
// 4. Delete June from an array ?

// sol:1

const newMonths1 =months.splice(months.length,0,'Dec');
console.log(months);

//sol:2

console.log(newMonths1);   //[]

console.log(typeof(newMonths1));  //object
//so it returs object here

// sol:3


//search the index
const indexOfMonths= months.indexOf('march');

if(indexOfMonths!=-1){
    const updateMonth = months.splice(indexOfMonths,1,'March');
    console.log(months);
}
else{
    console.log('No such data found');
}



// sol:4


//search the index
const indexOfMonths1= months.indexOf('June');

if(indexOfMonths1!=-1){
    const updateMonth = months.splice(indexOfMonths1,1);
    console.log(months);
    console.log(updateMonth);
}
else{
    console.log('No such data found');
}



console.log("-----VVI------");
console.log("---------Map(),Reduce(),Filter()----------");


// Array .prototype .map();



// let newArray = arr.map(callback(currentalue[,index[,array]]))
//      return element for newArray, after executing something
// }[,thisArg]);

//Returns a new array containing the results of calling 
// a function on every element in this array. 


console.log("-----MAP() METHOD------");

const array1 = [1,2,90,34,11,35];
//num >9

let newArr = array1.map((currElement,index,arr)=>{
    return currElement>9;
})

console.log(array1);
console.log(newArr);


console.log("-----Map method()------");


let array2 = array1.map((curElm,index,arr)=>{
    return `Index no =${index} and the value is ${curElm} belongs to ${arr}`
});
console.log(array2);

console.log("-----for-each method()------");


let array2for = array1.forEach((curElm,index,arr)=>{
    return `Index no =${index} and the value is ${curElm} belongs to ${arr}`
});
console.log(array2for);  //undefined


//so, the 1st deference between for each and map method 
// is returning value. 
// The for-each() method return undefined and map method 
// returns a new array with the transformed elements. Even if 
// they do some job, the returning value remains different. 



// So, the 2nd difference between is the ability to chain 
// other methods. 
// The second difference these array methods is the fact that map()
// is chainable. This means that you can attach reduce(), sort(), filter()
// and so on after performing a map() method on an array.

// so, that is something you can't do with forEach() because,
// as you might guess, it returns undefined. 


console.log("-----for-each method() with chain rule------");

let array3 = array1.map((curElm,index,arr)=>{
    return `Index no =${index} and the value is ${curElm} belongs to ${arr}`
}).sort();
console.log(array3);

console.log("-----Challenge Time------");

// 1. Find the square root of each element in an array?

let arr1=[25,36,49,64,81];

let arrSqRoot = arr1.map((currEle)=>{
    return Math.sqrt(currEle);
});

console.log(arrSqRoot);

// 2. Multiply each element by 2 and return 
// only those elements which are greater than 10?

let arr2 =[2,3,4,6,8];

let arrMulWithTwo=arr2.map((currEle)=>{
    return currEle*2;
}).filter((currEle)=>{
    return currEle>10;
})

// or 
// let arrMulWithTwo=arr2.map((currEle)=> currEle*2).filter((currEle)=>currEle>10);

console.log(arrMulWithTwo);


console.log("-----Reduce Method()------");

//flatten an array means to convert the 3d or 2d array 
// into a single dimensional array 

// The reduce() method executes a reducer function (that you provide)
// on each element of the array, resulting in single output value. 

// The reducer function takes four argumments:

// Accumulator
// Current value
// Current index
// Source Array 



let arr= [5,6,2];

let arrSum =arr.reduce((Accumulator, curElem, index, arr)=>{
    debugger;
    return Accumulator +=curElem;

})

console.log(arrSum);


console.log("-----2nd problem solve using Reduce Method()------");

// 2. Multiply each element by 2 and return the sum
// only those elements which are greater than 10?

let arr3 =[2,3,4,6,8];

let sum=arr3.map((currEle)=> currEle*2).filter((currEle)=>currEle>10).reduce((Accumulator,curElem)=>
    Accumulator+=curElem);
console.log(sum);


