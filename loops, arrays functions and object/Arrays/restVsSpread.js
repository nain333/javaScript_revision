// rest operator is useful in passing multiple arguments to a function without making changes to the functon signature
// syntx of rest operator: ...
// Suppose we've monthaly batches of Students
const septemberBatch=['Tina','Madhu']
const octoberBatch=['Simran','Kashika']
const novemberBatch=['Gudda','Shalini','Malini','Ridhi','Sidhi']
function addStudent(batch,...student){
    for(let i of student){
        batch.push(i)
    }
    console.log(batch)
}
console.log(septemberBatch)
addStudent(septemberBatch,'Himanshi','Priyanshi','Divyanshi','Shivanshi')
console.log(septemberBatch)
// spread Operator
// spread operator spreads out the array
// spreading septamberBatch in newBatch
let newBatch = [...septemberBatch]
console.log(newBatch)
newBatch.push('newStudent')
console.log(newBatch)
// expending or copying the array
// to concatinate
const mergedBatch =[...septemberBatch,...octoberBatch]
console.log(mergedBatch)