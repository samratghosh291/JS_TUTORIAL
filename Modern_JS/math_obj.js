// <----MATH OBJECT IN ES6--->

let a=+2;
let b=-3;
let c=0;
let d=-0;
let e="piku";
let f=NaN;
//it will find the sign of the number
console.log(Math.sign(a));
console.log(Math.sign(b));
console.log(Math.sign(c));
console.log(Math.sign(d));
console.log(Math.sign(e));
console.log(Math.sign(f));


let g=5.456;
let h=-9.993;

//trunc remove all from the point
console.log(Math.trunc(g));  //5
console.log(Math.trunc(h));  //-9
// same as trunc for positive and for negative next samller 
console.log(Math.floor(g)); //5
console.log(Math.floor(h)); //-10
//consider rightmost number
console.log(Math.ceil(g));  //6
console.log(Math.ceil(h)); //-9

//for exponential

let x=2;
let y=3;

// es5
console.log(x**y);
// es6
console.log(Math.pow(x,y));

//new numbers and global methods


//global method isFinite()
let num1=555555555555555555555555555555;
let num2=Infinity;
let num3=NaN;
console.log(isFinite(num1));  //true
console.log(isFinite(num2));  //false
console.log(isFinite(num3));  //false

//global method isNan()
console.log(isNaN(num1));  //true
console.log(isNaN(num2));  //false
console.log(isNaN(num3));  //false


// global vs. number object 
let name='piku';
console.log(Number.isNaN(name));  //false
console.log(isNaN(name));   //true

// Number .isInteger() is a number method 
let a1=2.1;
let a2=0;
let a3=2;

console.log(Number.isInteger(a1));  //false
console.log(Number.isInteger(a2));  //true
console.log(Number.isInteger(a3));  //true

