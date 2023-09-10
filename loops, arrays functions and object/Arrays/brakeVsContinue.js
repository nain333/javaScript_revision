// break beaks out the loop execution, and continue skip the current itration of the loop
// create a new array out of inputed array where in if a negative number is encountered the array should not contain the enteries further, also if duplicates are encountered they should be ignored i,e array should only contain the unique elements
function takeInput(){
    const input = parseInt(prompt('Enter the Lenght of Array: '))
    if(input<10){
        alert("Please Enter 10 or more")
        takeInput()
    
    }

    
    return input
}

const createArray=function(length){
    
    const array=Array(length)
    for(let i=0; i < array.length; i++ ){
        
        array[i]=parseInt(prompt(`Enter the number at ${i+1}th possition`))
        
    }
    return array;
}
const filterArray=function(array){
    let filteredArray=[]
    
    for(let number of array){
        if(number<0){
            break;
        }
        if((typeof number !== 'number' || isNaN(number)) || filteredArray.includes(number) ){
            continue;

        }
        filteredArray.push(number)
    }
    return filteredArray
}

let length= (takeInput())
const array = createArray(length)
console.log("user's input array: ",array)
const filteredArray=filterArray(array)
console.log('Filtered Array: ',filteredArray)
