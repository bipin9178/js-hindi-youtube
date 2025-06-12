const accountId =144553
let accountEmail = "bipin@gmail.com"
var accountPassword = "12345"
accountCity = "jaipur"
let accountState;

// accountId = 2 not allowed

accountEmail="bipin123@gmail.com"
accountPassword = "12346475674"
accountCity ="Bengaluru"
console.log(accountId);

/*
    Prefer not to use var
    beacause of issue in block scope and functional scope
*/
console.table([accountId,accountPassword,accountEmail,accountCity,accountState])