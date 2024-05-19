// array => collection of multiple elements
//      => in array first indexing starts with 

//Array Copy Operations
// Shallow Copy => A shallow copy of an object is a copy whose properties share the same
// Deep Copy => A deep copy of an object is a copy whose properties do not share the same references


const myArr = [0, 1, 2, 3, 4, 5] // => each and every number is called as elements, elements might be different
const Marvels = ["Hulk", "Captain America", "Iron Man", "Spider-Man"]
console.log(Marvels[3]);

// Array Methods

// Push => it simply adds an array
myArr.push(6)
console.log(myArr);

Marvels.push("X-Men")
console.log(Marvels);

// pop => Last Value of the array will be removed
myArr.pop()
console.log(myArr);

Marvels.pop()
console.log(Marvels);

myArr.unshift(9)
console.log(myArr);

myArr.shift()
console.log(myArr);


// asking qustion using includes
console.log(myArr.includes(9));
console.log(myArr);

// Join => it will convert into String
const newArr = myArr.join()

console.log(myArr);
console.log(newArr);
console.log(typeof newArr);


// slice, spice => it will manipulate the array

console.log("A ", myArr);

const mynwA1 = myArr.slice(1, 3)
console.log(mynwA1);
console.log("B ", myArr);

const mynwA2 = myArr.splice(1, 3)
console.log(mynwA2);
console.log("C ", myArr);






