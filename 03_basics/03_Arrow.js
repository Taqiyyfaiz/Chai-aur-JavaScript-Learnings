const user = {
    username: "Faiz",
    Price:"1999/-",
    
    // Created a funtion and stored 
    welcomeMessege: function() {
        // When users come into this function only For them ill paas the messege.

        // This -> Makes Currnt Context 
        console.log(`${this.username} , welcome to website`); 
        console.log(this);
        
        
    }

}
// user.welcomeMessege()
// user.username = "Sam"
// user.welcomeMessege()

// console.log(this);

// Browser ke andar jo object hai usko khete hai windows Object

// function chai() {
//     console.log(this);
    
// }
// chai()

// How we declare functions using arrow function

// const chai = function() {
//     let username = "Faiz"
//     console.log(this.username);
    
// }

const chai = () => {
    let username = "Faiz"
    console.log(this);
    
}
// chai()

// Basic Syntax of Arrow functions 
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// Impilict Return
// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) =>  (num1 + num2)

// To return the object yu have to use parenthesis ()
const addTwo = (num1, num2) =>  ({username: "Faiz"})

console.log(addTwo(3, 4));


const myArray = [2, 5, 7, 8, 0]


















