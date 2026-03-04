const accountId = 144553
let accountEmail = "nikamp870@gmail.com"
var accountPass = "12345"
accountCity = "Jaipur"
let accountState;

//  prefer not to use var because of issue in block scope and functional scope 

accountEmail = "nikamp870@gmail.com"
accountPass = "123456"
accountState = "Bengluru"

console.log(accountId);

console.table([accountId, accountEmail, accountPass, accountCity, accountState])
