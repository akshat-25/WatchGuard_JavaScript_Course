const accountId = 1101
let accountEmail = "akshat@gmail.com"
var accountPassword = "Test@123"
accountCity = "Noida"
let accountState;


accountEmail = "a@gmail.com"
accountPassword = "123@Test"
accountCity = "Noida 142"

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])