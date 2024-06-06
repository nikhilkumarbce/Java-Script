// Primitive

// 7 types : String, Number, Boolean, null, undefined, BigInt, Symbol

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol("123")
const anotherId = Symbol("123")

// console.log(id);
// console.log(anotherId);

// console.log(id === anotherId);

const bigNumber = 12346789451289168n



//Reference (Non Primitive)

// Array , Object, Function

let heroes = ["shaktiman", "naagraj", "doga"];

let myObj =
{
    name : "nikhil",
    age : 21
};

 const myFunction = function() {
    console.log("hello")
}

// console.log(heroes);
// console.log(myObj);
// console.log(myFunction);
// console.log(typeof myFunction);

// console.log(typeof myObj);
// console.log(typeof outsideTemp);

// console.log(typeof id);




//  **********************   MEMORY IN JS   *******************//

//  STACK AND HEAP  


// let myYoutubename = "Nikhilblog"

// let anotherName = myYoutubename
// anotherName = "Blogwithall"

// console.log(myYoutubename);
// console.log(anotherName);


let userOne = {
    email: "user@gmail.com",
    upi: "user@paytm"
}

let userTwo = userOne
userTwo.email = "userTwo@gmail.com"

console.log(userOne);
console.log(userTwo);


// Primitive Data types gives copy if accesed another time ;  while non-primitive gives reference.