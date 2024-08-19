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
console.log(loginUserMesg());

