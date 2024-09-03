const Nums = [1, 2, 3, 4, 5]

// 

// Chaining

const myNums = Nums
                    .map( (num) => num * 10 )
                    .map( (num) => num + 1)
                    .filter( (num) => num >= 40)
console.log(myNums);
