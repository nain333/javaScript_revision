/** Functions in JavaScript */
// function to greet the users.
// function defination
let userName= prompt('Enter your username: ')
function greetUser(){
    console.log("Hello Welcome to the session")

} 
// function calling
greetUser()
function greetUser(userName){
    console.log(`Welcome to the session, ${userName}`)


}
greetUser(userName);
// the phenomenon going here is also known as function overloading, as we are declaring two functions with the same name but the function signature differes.
