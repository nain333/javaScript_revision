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