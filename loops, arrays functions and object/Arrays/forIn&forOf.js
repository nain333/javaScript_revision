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
for(i in Students){
    console.log(`Roll No: ${parseInt(i)+1}:${Students[i]}`)
}
// the itrator is index
// for of loop:
console.log('for Of prints below this line')
let forOfRoll=0;
for(let student of Students){
    forOfRoll++;
    console.log(`Roll No: ${forOfRoll}:${student}`)
}
// the iterator is element itself

// find duplicates 
function findDuplicate(arr) {
    const seen = [];
    const duplicates = [];

    for (const item of arr) {
        if (seen.includes(item)&&!duplicates.includes(item)) {
            duplicates.push(item);
            
        } else {
            seen.push(item);
        }
    }

    return duplicates;
}
console.log(findDuplicate([1,4,1,4,1,1,14,4]))
