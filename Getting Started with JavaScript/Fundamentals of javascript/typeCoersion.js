{
/* Type Coersion */
console.log(5+5);
let rum = '5'+5
console.log(typeof(rum));
// why 55?
// the plus opertator when used with a number and a string tries to convert the number to the string and concatinate the two strings
let firstName="Star "
let lastName = "Boy"
let fullName = firstName+lastName
console.log(fullName)
let sub = '55' - 10;
console.log(sub)
// it is 45 because in case of substraction operator , the String is being converted into number and the resulting data type is also a number
// same with * / 
}
