let squared=function(num){
    return num*num;
}
let square=squared(5)
console.log(square)
let reSquared=function (num){
    console.log(num*num);

}
let a = reSquared(5)
console.log('a')
// if you don't return something explicity, the function will return undefined.
// only one value or expression can be returned from a function
// the function will terminate after encoutering the return