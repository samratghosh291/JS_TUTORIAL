
// ------------MODERN JS----------------

// -------------History-----------------
// javascript-->1996
// ECMA International--->1997
// ES6--->2015 


console.log("----var-----");

var myName = "piku";
console.log(myName);
myName="samrat";
console.log(myName);

 
console.log("----let-----");

let myName_1 = "piku";
console.log(myName_1);
myName_1="samrat";
console.log(myName_1);

console.log("----const-----");

// const myName_2 = "piku";
// console.log(myName_2);
// myName_2="samrat";
// console.log(myName_2);

// above code will give you error. 


console.log("----Function-Var-----");


// var=> function scope
// let and const => block scope 

function bioData(){
    var myFirstName ="piku";
    console.log(myFirstName);
    if(true){
        var myLastName = "ghosh";
        console.log("inner"+myLastName);
        console.log("inner"+myFirstName);
    }
    console.log("innerOuter"+ myLastName);
}

 bioData();


 console.log("----Function-Let-----");

 function bioData(){
    let myFirstName ="piku";  // parent declear
    console.log(myFirstName);
    if(true){
        let myLastName = "ghosh";    //child declear 
        console.log("inner"+myLastName);  //child call inside child
        console.log("inner"+myFirstName+"\n");  //parent call inside child
    }
    // console.log("innerOuter"+ myLastName);  //child call outside child..and it through you error.
    // because let is block scoped 
}

 bioData();


 console.log("----Template Literales & Template String-----\n");

//  JS programe to print table for given Number (8)

for(let num=1;num<=10;num++){
    let tableOf =12;
    console.log(`${tableOf} * ${num} = ${tableOf*num}`);
}


console.log("----Default Parameters-----");

// Default function parameters allow named parameters to be 
// initialized with default values if no values or undefined is passed. 

function mul(a,b=5){
    return a*b;
}

console.log(`The value is ${mul(4)}`);


console.log("----Fat Arrow Function-----\n");

console.log("Normal Way of Writing Function\n");

console.log(sum());

function sum(){
    let a=20,b=40;
    let sum = a+b;
    return `The sum is ${sum}`;
}


console.log("Fat Arrow Function\n");

console.log(sum_1());
const sum_1 =()=>{
    let a=3,b=48;
    let sum_1= (a+b);
    return `The sum is ${sum_1}`;
}





























