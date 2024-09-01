// const userEmail = "Faiz@tech.ai"
const userEmail = ""

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have the user email");
    
}

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN -> This are we called as falsy values

// Truthy Values
// "0", 'false', " ", [], {}, fucntion(){}, 

// if (userEmail.length === 0) {
//     console.log("Array is empty");
    
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is Empty");
}

// Nullish coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1= undefined ?? 15
val1= null ?? 10 ?? 15



console.log(val1);

// Terniary Operator
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less Than 80"): console.log("More than 80");


