// Arrays in JavaScript are dynamic
const cities = ['New York', 'Dubai', 'Mumbai', 'Dehli', 'Torronto']
// to calculate the length of the Array we have .length() 
console.log(cities.length)
// length is the actual size of array, from 1 to n
// unlike index from 0 to n-1
// changing a avalue in Array
cities[2]='Denmark'
console.log(cities)
// how come we can change the value if the array is const?
// const has this restriction only for primitive data types, array isn't a primitvie data type, it is a non-primitive data taype.
// in other languages we can't change the lenght of the array but in javaScript we can!
// methods on array:
/** Adding an element */
//push
const teamsName=['CSK','RCB','MI','DSG']
const pushResult=teamsName.push('GT')
console.log('Push returned: ',pushResult)
console.log(teamsName)/** push will only add the element to the end of the array. */
//unshift
// adds the element to the start
const unshiftReslut=teamsName.unshift('KKR')
console.log('unshift returned: ',unshiftReslut)
console.log(teamsName.length)
/** Removing an element */

//pop
// delete something from the end
const popResult=teamsName.pop()

console.log(teamsName)
console.log('pop Returend: ',popResult)
//shift
// shift deletes the element form the start
const shiftResult=teamsName.shift()
console.log('Shift returned: ',shiftResult)
console.log(teamsName)
/**Check the element is present or not */
//indexOf()
// indexOf() returns the index of a particular element if it is present it ne array. Else it returns -1
const indexOfMI=teamsName.indexOf('MI')
console.log(`Index of MI ${indexOfMI}`)
const indexOfAbsentElement=teamsName.indexOf('KXIP')
console.log(`Index of absent element is: ${indexOfAbsentElement}`)
//includes()
// It will not return the indexNumber if present rather it will return a boolean value true or false if an element is present or not in the array.
const isMI=teamsName.includes('MI')
console.log('Does Includes MI?',isMI)
const isKXIP=teamsName.includes('KXIP')
console.log('does include KXIP?',isKXIP)
//slice and splice
// slice will remove the elements from an array but it won't touch the original array instead it will create a shallow copy of the array to perform the operations
console.log('Original Array:',teamsName)
console.log(teamsName.slice(2))
// possitive number in slice mean it will remove the elements from start
console.log(teamsName)
// the console statement above demonstrate the original array is as it is , and the remove operations performed by the slice function are performed on a copy of array which was created by slice() itself
console.log(teamsName.slice(-1))
// if we slice a negative number, all the elements will be removed only the last number of elements which we specified will be retained in the array
console.log(teamsName)
// splice()
// slice will also help you to remove the elements from the array and add the elements to the array.
teamsName.splice(2/*index number to add*/,0/*how many elements you want to delete*/,"KXIP"/*The element you want to add ot the array* (if you pass multiple elements here they will be added to possition 2 in the order they're passed*/)
// syntax of splice splice(index,deleteCount,insert)
console.log(teamsName)


//concat()
const teams2=['Ind','Aus','NZ','ENG']
// It will create a copy of the arrays and merge them together
const mergedTeams=teams2.concat(teamsName)
console.log('Merged teams: ',mergedTeams)
