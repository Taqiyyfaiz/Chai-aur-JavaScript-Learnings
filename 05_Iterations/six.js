// const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach( (coding) => {
//     console.log(coding);
    
// })

// console.log(values);


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => {
//     return num > 4
// })
// console.log(newNums);


// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// })
// console.log(newNums); 


const books = [
    {
        title: "Book One", genre: "Sci-fi", publish: "2002"
    },
    {
        title: "Book two", genre: "Adventure", publish: "2002"
    },
    {
        title: "Book three", genre: "History", publish: "2002"
    },
    {
        title: "Book four", genre: "Non-Fiction", publish: "2002"
    },
    {
        title: "Book five", genre: "History", publish: "2002"
    }
];

const userBooks = books.filter( (book) => book.genre === 'History')

const Books = books.filter( (book) => {
    return book.publish >= 2000 && book.genre === "History"
} )

console.log(userBooks);


