// Loop over Arrays:
const Students=[
    'Ashis',
    'Anya',
    'Bhavya',
    'Disha',
    'Elisha',
    'Falak',
    'Garima',
    'Himanshi',
    'Inayat',
    'Jyoti',
    'Komal',
    'Lavanya',
    'Mansi',
    'Navya',
    'Olivia',
    'Piya',
    'Qusum',
    'Rashmi',
    'Sanjana',
    'Tanisha',
    'Urvi',
    'Vandana',
    'Xiti',
    'Yukhta',
    'Zahira'


]
let n = Students.length;
for (let i = 0; i <=n-1; i++){
    console.log(`Roll NO: ${i+1}:${Students[i]}`)
}
let arr = [23, 56, 4, 78, 5, 63, 45, 210, 56];
let ele = 56;
function deleteOccur(arr,ele){
   //Implement Your function here
   let newArr=[];
    for(let i = 0; i <= arr.length-1; i++){
        if(arr[i]!==ele){
            newArr.push(arr[i])
            
        }
}
return newArr;
};

console.log(deleteOccur(arr,ele));