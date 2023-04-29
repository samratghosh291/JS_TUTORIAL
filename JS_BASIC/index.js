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
var newNum = num++;

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



console.log("3**5=(3*3*3*3*3)=243");
console.log("10**-1=(1/10)=0.1");

console.log("-----------Interview Question--------------");

// 1.What is the difference b/w == and === ?

var num_1 =5;
var num_2='5';

console.log(typeof(num_1));  //number
console.log(typeof(num_2));  //string

console.log(num_1==num_2);  //true ('==' checks only value)
console.log(num_1===num_2); //false ('===' checkes calues with their datatype)

console.log("----------control statement and loops-----------\n");

// 1. if-else
// 2. switch statement 
// 3. while loop
// 4. do-while loop
// 5. for loop
// 6. for in loop
// 7. for of loop
// 8. ternary operator

// If....Else 
 
var tomm = "rain";

if(tomm=="rain"){
    console.log('take a raincoat');
}
else{
    console.log("don't need a raincoat\n");
}

//check wheather leap year or not

var year = 2000;

if(((year%4===0)&&(year %100!=0))||(year%400===0)){
    console.log("Leap Year\n")
}
else{
    console.log("Not a leap year\n");
}


//  What is truthy and flasy values in JS?

//  we have total 5 falsy values in JS.
//  That's are 0, " ", undefined, null, NaN, false** is false anyway 


if(score =0){
    console.log("OMG! We loss the game.\n");
}
else{
    console.log("We won the game.\n");
}


if(""){
    console.log("This is not a null string.\n");
}
else{
    console.log("This is a null string.\n");
}


if(val=undefined){
    console.log("This is not a undefined.\n");
}
else{
    console.log("This is a undefined.\n");
}

if(val=NaN){
    console.log("This is not a NaN.\n");
}
else{
    console.log("This is a NaN.\n");
}


console.log("------TERNARY OPERATOR-----\n");

var age =20;
console.log((age>=18)?"You are eligable for vote\n":"You are not eligable for vote\n");


console.log("------SWITCH CASE-----\n");

//  Switch Statement 
// Evaluate an expression, matching the expression value to a 
// case clause, and executes statesments associated with the case.

// 1st without break statement
// Find the Area of circle, triangle, rectangle?
// the with break statement 


console.log("------Using (if....else)-----\n");


var area = "rectangle";
var PI = 3.142, l=5, b=4, r=3;

if(area =="circle"){
    console.log("The area of the circle is: "+PI*r**2+"\n");
}
else if(area=="triangle"){
    console.log("The area of the triangle is: "+(l*b)/2+"\n");
}
else if(area == "rectangle"){
    console.log("The area of the rectangle is: "+(l*b)+"\n");
}
else{
    console.log("Enter the valid entry");
}


console.log("------Using Switch Case-----\n");

var area_1="rectangle";
var PI = 3.142, l=5, b=4, r=3;

switch(area_1){
    case 'circle':
        console.log("The area of the circle is: "+PI*r**2+"\n");
        break;
    case 'triangle':
        console.log("The area of the triangle is: "+(l*b)/2+"\n");
        break;
    case 'rectangle':
        console.log("The area of the rectangle is: "+(l*b)+"\n");
        break;
    default:
        console.log("Enter the valid entry");
}


console.log("------While Loop-----\n");

var a_1=1;
while(a_1<=10){
    console.log(a_1);
    a_1++;
}

console.log("------Do-While Loop-----\n");

var a_2=1;
do{
    debugger;
    console.log(a_2);
    a_2++;
}while(a_2<=10);

console.log("------For Loop-----\n");

for(var for_1=1;for_1<=10;for_1++){
    console.log(for_1);
}

console.log("------Challenge time-----\n");

// write a programe for print the multiplication table for 
// 8,9,12,15.

console.log("----MULTIPLICATION TABLE OF 8----");
for(var a=1;a<=10;a++){
    var tableOf= 8;
    console.log(tableOf+" * "+a+" = "+(a*tableOf));
}
console.log("----MULTIPLICATION TABLE OF 9----");
for(var a=1;a<=10;a++){
    var tableOf= 9;
    console.log(tableOf+" * "+a+" = "+(a*tableOf));
}
console.log("----MULTIPLICATION TABLE OF 12----");
for(var a=1;a<=10;a++){
    var tableOf= 12;
    console.log(tableOf+" * "+a+" = "+(tableOf*12));
}
console.log("----MULTIPLICATION TABLE OF 15----");
for(var a=1;a<=10;a++){
    var tableOf= 15;
    console.log(tableOf+" * "+a+" = "+(a*tableOf));
}

console.log("-----FUNCTION-------\n");


// function is a group of code which can be use many times inside the programme.
// It increases the reusability of the code.



//function defination
//function parameters are the real values passed to the function
function sum(a,b){
    console.log(a+b); 
}

//function call
sum(30,20); //function arguments are the listed in the function defination.


console.log("-----FUNCTION EXPRESSION-------\n");

// ==> Function expression simply means create 
// function and put it into the variable.


function getSum(a,b){
    return a+b; 
}

//function expression
var funcExp=getSum(30,90); 

console.log(funcExp);


console.log("-----ANONYMOUS FUNCTION-------\n");

// A function expression is similar to and has same syntax 
// as a function decleratio One can define "named"
// fuction expressions (where the name of the expression might 
// be used in the call stack for example)
// or "anonymous" function expressions.

var funEXP = function (a,b){
    return a+b;
}

var sum1=funEXP(20,70);
var sum2=funEXP(20,780);

console.log(sum1>sum2);
 


