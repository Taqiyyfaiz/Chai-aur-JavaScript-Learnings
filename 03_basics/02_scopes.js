var c = 300 // global scope
// let a = 300 

// curly braces-{} when it comes in functions if else thne it is called scope
let a = 300  // -> Global Scope 
if (true) {  //   -> block scope
    let a = 10
    const b = 20
}



// console.log(a);
// console.log(b);
// console.log(c);


// How Nested Scope works ?
// child function access parent variable  
function one() {
    const username = "Faiz"

    function two() {  // scope starts
        const website = "Youtube"
        console.log(website);

    } // scope ends
    console.log(username);

    two()

}
// one()

if (true) {
    const username = "Faiz"
    if (username === "Faiz") {
        const website = "  Youtube"
        // console.log(username + website);
    }
    // console.log(username);
    
}
// console.log(website);


//  *************** Intresting ***************

function addone(num) {
    return num + 1
}
addone(5)

const addTwo = function (num) {
    return num + 2
}
addTwo(6)
