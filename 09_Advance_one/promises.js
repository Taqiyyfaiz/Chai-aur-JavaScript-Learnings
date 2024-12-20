// Promises in JS
const promisesOne = new Promise(function (reslove, reject) {
  // Do an Async task
  // DB Calls, cryptography, network
  // Here I will use setTimeout
  setTimeout(function () {
    console.log("Async Task is Completed");
    reslove();
  }, 1000);
});

promisesOne.then(function () {
  console.log("PROMISE CONSUMED");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async Task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 Resolved");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Chai", email: "chai@chaiaurcode.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});
// Therefore this how data consumption works

const promiseFour = new Promise(function (reslove, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      reslove({ username: "Taqi", Password: "1234" });
    } else {
      reject("ERROR: Something Went Wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => console.log("The promise is either resolved or rejected"));

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(function () {
    let error = true;
    if (!error) {
      reslove({ username: "JS", Password: "123JS" });
    } else {
      reject("ERROR: JS Went Wrong");
    }
  }, 1000);
});
// it waits till the task completes if it completes the it go to next
async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumePromiseFive();


// async function getAllUsers() {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data =  await response.json()
//     console.log(data);
//   } catch (error) {
//     console.log("E: ", error);
//   }
// }

// getAllUsers()
fetch('https://api.github.com/users/TaqiyyFaiz')
  .then((response)=> {
    return response.json()
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error))
