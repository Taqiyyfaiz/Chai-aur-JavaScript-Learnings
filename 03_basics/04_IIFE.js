// Immediately Invoked Function Expressions (IIFE)

(function chai() {
    // named IIFE
    console.log(`DB CONNECTED`);

})(); // tO End this you have to use semicolon ;

// IIFE => Global Scope ke pollution se problem hoti hai kahi baar uss global scope ke jo bhi decalrain hai uske pollution ko hatane ke liye use kiya   

((name) => {
    // unnamed IIFE
    console.log(`DB CONNECTED TWO ${name}`);

})('Faiz')
