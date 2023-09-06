// Default parameters are the default paramteres given to the function, in case not argument is passed to the function, the function will pick the default one if delared in the function signature.
function findSum(num1, num2){
    let result = num1+num2
    return result

}
let result = findSum(5)
console.log(result)
// above call will retrn NaN because the second number is undefined.
function sum(num1=0, num2=0){
    result=num1+num2
    return result
}
let secondResult=sum(5)
// for the call above the sum function willl take second argument as 0 from the default perameters defined in the function signature
console.log(secondResult)