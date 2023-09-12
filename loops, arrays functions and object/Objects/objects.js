const student={
    name:'anyName',
    age:10,
    hobby:'Singing',
    333:'threeHundredThrityThree',
    showStudent: function(){
        console.log(this)

    }
    // key:value


}
console.log(student.name)
student.showStudent()
console.log(student[333])
// working with objects
//Complete the findClassTopper function
//Do not alter alter the starter code. 
    //The object on which you will be working will be of this format.
    const studentMarks = {
        John: [85, 90, 92, 88, 87],
        Jane: [92, 95, 89, 91, 94],
        David: [78, 85, 90, 92, 84],
        Emily: [90, 88, 92, 87, 91],
        Michael: [86, 92, 90, 89, 94]
    };
    
    function findAverage(marks) {
        let sum = 0;
        let subjects = 0;
    
        for (score of marks) {
            sum += score;
            subjects += 1;
        }
    
        let average = parseFloat(sum / subjects);
        return average;
    }
    
    function findClassTopper(studentMarks) {
        let topStudent = '';
        let maxAvg = -Infinity;
    
        for (let student in studentMarks) {
            let marks = studentMarks[student];
            let avg = findAverage(marks);
    
            if (avg > maxAvg) {
                maxAvg = avg;
                topStudent = student;
            }
        }
    
        return topStudent;
    }
    
    console.log(findClassTopper(studentMarks)); // Output: "Jane"
    