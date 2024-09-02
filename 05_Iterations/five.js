// Higher order 

const coding = ['Java', 'Python', 'CPP', 'Ruby', 'Swift']
// forEach => forEach calls the callbackfn function one time for each element in the array.
// coding.forEach( function (items) {
//     console.log(items);
    
// } )

// using Arrow Funtions
// coding.forEach( (items) => { 
//     console.log(items);
    
// } )

// function printMe(items) {
//     console.log(items);
    
// }
// coding.forEach(printMe)

// coding.forEach( (items, index, arr) => {
//     console.log(items, index, arr);
    
// })

const myCoding = [
    {
        languageName: "JavaScript",
        languageFileName: "js"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    },
    {
        languageName: "Java",
        languageFileName: "java"
    },
]
myCoding.forEach( (items) => {
    console.log(items.languageFileName);
    
})

