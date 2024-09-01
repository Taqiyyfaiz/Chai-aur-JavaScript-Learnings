// if statement
const isUserloggedIn = true
const temperature = 58
// if (temperature === 50) {
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// === Checks the type 

// const score = 200
// if (score > 200) {
//     const power = 'fly'
//     console.log(`user power: ${power}`);
    
// } 

// Short hand notation

// const balance = 1000

// if (balance > 500) {
//     console.log("test");
    
// }
// if (balance < 500) {
//     console.log("less than");
    
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");
    
// }

const userloggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userloggedIn && debitCard && 2 == 3) {
    console.log("Allow to Buy Course");
    
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log('User Logged in');
    
}

// &&(AND) All the conditions should be true
// ||(OR) Anyone Must be True
