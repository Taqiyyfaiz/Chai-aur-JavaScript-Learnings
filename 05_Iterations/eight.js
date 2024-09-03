// Reduce Method

const Nums = [1, 2, 3]

// const Total = Nums.reduce(function (accu, currval) {
//     console.log(`acc: ${accu} and currval: ${currval}`);
    
//     return accu + currval
// }, 0)

const Total = Nums.reduce( (accu, currval) => accu + currval, 0)
console.log(Total);


const ShoppingCart = [
    {
        itemName: "Java DSA Course",
        Price: "4999/-"
    },
    {
        itemName: "Python Course",
        Price: "2999/-"
    },
    {
        itemName: "AI Course",
        Price: "7999/-"
    }
]

const priceToPay = ShoppingCart.reduce( (accu, item) => accu + item.Price, 0)

console.log(priceToPay);
