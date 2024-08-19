// This is Called function
function myName() {
  console.log("M");
  console.log("t");
  console.log("a");
  console.log("q");
  console.log("i");
}

// myName()

function addTwoNum(num1, num2) {
  let result = num1 + num2;
  return result; // if you rerturn a value after that it won't print anything after return statement
}
const result = addTwoNum(2, 6);

// console.log("Result: ", result);


function loginUserMesg(username) {
  if(username === undefined){
    console.log("Please enter a username");
    return 
  }
  return `${username} just logged in`
}

// console.log(loginUserMesg("Taqi Faiz"))
// console.log(loginUserMesg());

// Functions with objects

// ... Rest or Spread Operator it will be based on uses
function calculateCardPrice(...num1) {
  return num1
}
// ... It will print the multiple values into array
// console.log(calculateCardPrice(200,300, 400));

const user = {
  username: "Taqi",
  price: "999"
}

function handleObject(anyObject) {
  console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
  
}

handleObject(user)


const myNewArray = [2, 5, 7, 10]

function returnThirdValue(myArray) {
  return myArray[3]
}
console.log(returnThirdValue(myNewArray));


