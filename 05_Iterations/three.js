// for of Loop

// to decalre multiple arrays inside an arrays
// [[], [], []]

// To declare Object inside array 
// [{}, {}, {}, {}]

const arr = [1, 2, 3, 4, 5, 6]

for (const num of arr) {
    // console.log(num);
    
}

const Greetings = "Hello World"

for (const greet of Greetings) {
    // console.log(greet);
}

// maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")

// console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
    
}

const myObject = {
    'game1' : 'NFS',
    'game2': 'Spiderman'
}
for (const [key, value] of myObject) {
    console.log(key, ':-', value);
    
}