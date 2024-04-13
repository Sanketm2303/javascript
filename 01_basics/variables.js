const accountId = 21331
let accountEmail = "saan@gmail.com"
var accountPassword = "12345"
accountCity = "mumbai"
let accountState;

// accountId = 4223
// console.log(accountId); not allowed 
/* prefer not to use var 
because of issue in block scope & function scope */


accountEmail = "saanm@gmail.com"
accountPassword = "32435"
accountCity = "dehli"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])