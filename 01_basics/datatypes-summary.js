// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const marks = 100
const totalmarks = 500

const isLoggedIn = false
const outsidetemp = null
let userEmail;

const id = Symbol('123')
const anotherid = Symbol('123')

console.log(id === anotherid);
// const bigNumber = 221191101088n


// Reference (Non- Primitive)

// Array, Obejcts, Functions

const heros = ["Iron man", "Spiderman", "Hulk"];
let myOnj = {
    name: "Taqi",
    age: 22,
}

const myfunction = function() {
    console.log("Hello World");
}

console.log(typeof myfunction);

// link to study
// https://262.ecma-international.org/5.1/#sec-11.4.3

// ***********************************************************************

// stack memory(Primitive), heap memeory(Non-Primitive)

// stack = primitive values goes to stack if you get from stack it will give you the copy
// heap = in heap whatever the values you will give it will give you a reference

let myportfolio = "Dev.TaqiyyFaiz"

let anothername = myportfolio
anothername = "Developer.TaqiyyFaiz"

console.log(myportfolio);
console.log(anothername);

let user1 = {
    email: "user@gmail.com",
    upi:"user1@upi"
}

let user2 = user1

user2.email = "faiz@google.com"

console.log(user2.email);
console.log(user1.email);