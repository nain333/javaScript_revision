// find the sum of the digits of the nubmer provided by user
{
    let input = prompt("Enter the number: ")
    let num = parseInt(input)
    let sum =0;
    while(num>0){
        let lastDigit=num%10
        sum+=lastDigit
        num=Math.floor(num/10)
        

    }
    console.log(sum)
}