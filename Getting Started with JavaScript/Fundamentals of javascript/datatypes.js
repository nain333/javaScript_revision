/* Data Types
    1. Object
    2. Primitive Datatypes
*/

/* *********************************** *
***        Primitive DataTypes       ***
/* *********************************** */

// Number (64 bit)

let num = 10;
console.log(typeof num);

// String
const firstName = "Nain's";
const lastname = 'Laptop';
const nickName = `Tom`;

console.log(typeof firstName);
console.log(typeof lastname);
console.log(typeof nickName);

// Boolean
let bool = false;
console.log(typeof bool);

// Undefined
let a;
console.log(typeof a);
console.log(a);

// Null
let b = null;
console.log(b);
console.log(typeof b);

// Symbol(ES6/2015)

// BigInt(ES2020)
let num1 = 10n;
console.log(typeof num1);

// interesting facts
const maxNumber=Number.MAX_VALUE;
const minNumber = Number.MIN_VALUE;
const biggerThanMax=maxNumber*10;
const smallerThanMin=minNumber/10;
console.log(`Max Number: ${maxNumber}, Min number : ${minNumber} , and beyond max and min number is : ${biggerThanMax} `)
let nubmer3 = Infinity;
console.log(nubmer3/0)
console.log(333/nubmer3)
