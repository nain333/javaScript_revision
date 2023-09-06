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
// javaScript doesn't support function overloading, the function signature defined lates will overwrite the previous one.
