// singleton

// object literals

// contructer method
// Object.create()

const mySym = Symbol("Key1")

const JsUser = {
    name:"Faiz",
    "full name":"Taqiyy Faiz",
    [mySym] : "mykey1",
    age: 18,
    location: "Chennai",
    email:"faiz@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "AI.Faiz@Dev.com"
// Object.freeze(JsUser)
JsUser.email = "AI.Faiz@Google.com"

// console.log(JsUser);

JsUser.greeting = function() {
    console.log("Hello JS user");
}
JsUser.greeting2 = function() {
    console.log(`Hello JS user, ${this.name}`);
}


console.log(JsUser.greeting());
console.log(JsUser.greeting2()); 