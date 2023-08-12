// 1.Not using any concatinate operator
//es5
console.log("My name is piku. "+"My age is 20.");

//es6
console.log(`My name is piku. My age is 20.`)

// 2.declear the variable
// es5
let firstName="piku";
let lastName="ghosh.";
console.log("My name is "+firstName+" "+lastName);

// es6
console.log(`My name is ${firstName} ${lastName}`);

// 3. for in Newline

let a=50;
let b=40;

// es5
console.log("Ninenty is "+ (a+b)+"\nToday is Sunday.");
//es6
console.log(`Ninenty is ${a+b}
Today is Satureday.`)


//es6 METHODS

let MyName="samrat";
let MyTitle="Ghosh";

console.log(`${MyName}`.startsWith('s'));
console.log(`${MyName}`.endsWith('t'));
console.log(`${MyName}`.includes("amra"));
console.log(`${MyName} `.repeat(3));
console.log(`${MyName}${MyTitle} `.repeat(3));

//alternate method

const mn=`${MyName}`;
const mt=`${MyTitle}`;

console.log(mn.startsWith('s'));
console.log(mn.endsWith('t'));
console.log(mn.includes("amra"));
console.log(mn.repeat(3));

const fn=`${MyName}${MyTitle}`;
console.log(fn.repeat(3));

