const marvel_heros = ["Thor", "Iron Man", "Hulk"]
const DC_Heros = ["Superman", "BatMan", "Flash"]

// marvel_heros.push(DC_Heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][2]);


// const allHeros = marvel_heros.concat(DC_Heros)
// console.log(allHeros);


// const new_Heros = [...marvel_heros,...DC_Heros]
// console.log(new_Heros);

// rarely used array

const anotherarray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const my_Used_Array = anotherarray.flat(Infinity)

console.log(my_Used_Array);

// specially when you will do datascrapping their you will use this

console.log(Array.isArray("Faiz"))
console.log(Array.from("Faiz"));
console.log(Array.from({name: "Faiz"})); /// increasing


let score = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score, score2, score3));