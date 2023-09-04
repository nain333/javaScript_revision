{
/* Type Conversion (explicit type conversions)*/
/* Convert to String */
//String()
console.log(String(100))
console.log(100)
console.log(String(true)); 
console.log(String(undefined))
console.log(null)

// toString()
console.log((333).toString())
// console.log(null.toString())
// null and undefined can't be converted to String using .toString() method
// *****Convert to number******
// Number();
console.log('***Numbers***')
console.log(Number('25'))
console.log(Number('24f'))
// evaluates to NaN
console.log(Number('value'))
// if you try to convert a string which isn't having number inside it, it will be converted to NaN (Not a Number)
console.log(Number(true))
console.log(Number(false))
// Urinary + operator::works on variables
let a = '123';
console.log(+a)
a = '123zen'
console.log(+a)
// converts to NaN
/* parseFloat() */
let num = parseFloat('1.5anythingblah');
console.log(num)
console.log(parseFloat('3.14.15'))

/** parseInt() */
console.log(parseInt('12345'))
console.log(parseInt('1334f'))
// extracts the number from the string and converts it to the extracted number before it encouter any non number string.
console.log(parseInt('f134'))
// if the string starts with a non-numeric string, it will give NaN.
console.log(parseInt(33.4))
// it will not parse any floating point number will just give 33 as it is string integer 
/** convert to boolean */
// boolean()
console.log(Boolean('nain333'))
}