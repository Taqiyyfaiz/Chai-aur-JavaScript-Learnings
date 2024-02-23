const accountId = 1445553
let accountEmail = "abc@gmail.com"
var accountPassword = "12345"
accountCity = "Chennai"
let accountState;

// accountId = 2 Not allowed

accountEmail = "hc@hc.com"
accountPassword = "212134"
accountCity = "Bengaluru"

console.log(accountId);


/*
Prefer Not to use Var
Because of issue in block scope and Functional Scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])