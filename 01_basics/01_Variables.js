// Const => Once you assigned a value in const you can't able to change
const accountId = 1445553

// to declare a variable there are two types 
// 1. let  (if you declare a variable without it tells you undefined)
// 2. var => (Prefer Not to use Var Because of issue in block scope and Functional Scope)

let accountEmail = "abc@gmail.com" 
var accountPassword = "12345"
accountCity = "Chennai"
let accountState;

// accountId = 2 Not allowed
accountEmail = "hc@hc.com"
accountPassword = "212134"
accountCity = "Bengaluru"

console.log(accountId);

//console.log 2nd method which will display in table format
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])