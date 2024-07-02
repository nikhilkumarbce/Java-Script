// if

const temperature = 43

// if (temperature <=  41) {
//     console.log("Temperature is less tha 42")
// }
// else{
//     console.log("Temperature is greater than 42")
// }
// console.log("Executed")

// <, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`)   
// }

// console.log(`User power: ${power}`)


// const balance = 2000
// if (balance > 1000) console.log("test");

// if (balance < 500) {
//     console.log("less than 500")
// }
//  else if (balance < 750) {
//     console.log("less than 750")
// }
// else if (balance < 900) {
//     console.log("less than 900")
// }
// else{
//     console.log("less than 2100")
// }


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy courses")
}

if (loggedInFromEmail || loggedInFromGoogle) {
    console.log("User logged in")
}
