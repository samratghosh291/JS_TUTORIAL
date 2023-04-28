// Values and Variables

var myName = 'samrat ghosh';
var myAge = 25;

console.log(myName);
console.log(myAge);


//Naming Practice
var _1my_Name ='piku';
// var 1myName = 'pinky';  //not correct variable name
var _1my__Name = 'papa';
var $myName = 'babai';

console.log(_1my_Name,_1my__Name,$myName); //piku papa babai



// ------------------------------------------------------------------


// Data types and variable

// six type of primitives datatype,

// undefined : typeof instance ==='undefined';
// Boolean : typeof instance ==='boolean'
// Number : typeof instance ==='number'
// String : typeof instance ==='string'
// BigInt : typeof instance ==='bigint'
// Symbol : typeof instance ==='symbol'

var Name = 'pikai';
console.log(Name);    //piku
console.log(typeof(Name));  //String


var age = 23;
console.log(age);    //23
console.log(typeof(age));  //Number


var piku = true;
console.log(piku);    //true
console.log(typeof(piku));  //Boolean

console.log("TASK--1");
console.log(10+'20');  //concatenation
console.log('10'+20);  //concatenation
console.log(9-"5");  //bug...this ia not possible to substruct a string from a number which gives us a number output
console.log("9"-5);  //bug
console.log("java"+ "script"); //concatenation
console.log("" + " ");  //concatenation
console.log(' '+'0');   //concatenation
console.log('0'+' ');  //concatenation
console.log("vinod" - "thapa");  //NaN = Not-A-Number

//always consider true=1 and false=0
console.log(true+true);
console.log(true+false);
console.log(false+true);
console.log(false-true);


//----------Interview Questions--------------
// 1.What is difference between null and undefined?


var iAmUseless = null;
console.log(iAmUseless);   //null
// (Her we explicitely assign null value)
console.log(typeof(iAmUseless));   //obj
//this is 2nd bug of JS



var iAmStandBy;
console.log(iAmStandBy);  //undefined
// (Her we explicitely didn't assign any value) 
console.log(typeof(iAmStandBy));  //undefined



// 2.What is NaN? 

// NaN is a property of the global object.
// In other words, it is a variable in global scope.
// The initial value of NaN is Not-A-Number. 



var myPhoneNumber = 6398457190;
var myname= "piku";
console.log(myPhoneNumber);
console.log(myname);

// chack wheather it is a number or not.

console.log(isNaN(myPhoneNumber));  //false
console.log(isNaN(myname));         //true


// ---------------TASK-2------------------------------

console.log("TASK--2");
console.log(NaN===NaN);           //false
console.log(Number.NaN===NaN);   //false
console.log(isNaN(NaN));          //true
console.log(isNaN(Number.NaN));  //true
console.log(Number.isNaN(NaN));  //true  

// -------------------Arithmetic Operator--------------

// An arithmetic operator takes numerical values 
// (either literals or variables) as their operands and 
// rturn a single numerical value. 

console.log(3+3);    //6
console.log(10-5);   //5
console.log(20/5);   //4
console.log(3*4);    //12

console.log("Reminder Operator: " + 81%8);

console.log("----------Unary Operator----------");

// Increment and Decrement operator
// Operator: x++ or ++x or x-- or --x
// If used postfix, with operator operand (for example x++),
//the increnment operator increments and returns the value before incrementing.

// If used prefix, with operator before operand (for example x++),
// the increment operator increments and returns the value after incrementing. 

console.log("----Postfix------");


var num =15;
var newNum = num++ +5;

console.log(num);  //16

console.log(newNum); //15


console.log("----Prefix------");

// postfix increment operator means the expression is evaluated.
// first using the original value of the variable and then the variable 
// is incremented (increased). 


var num =15;
var newNum = ++num ;

console.log(num);  //16

console.log(newNum); //16

// prefix increment operator means the variable is incremented first and then 
// the expression is evaluated using the new value of the variable. 












