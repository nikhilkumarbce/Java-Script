// SINGLETON

// object literals
const mySym = Symbol("key1");

const JsUser = {
    name: "Nikhil",
    "full name": "Nikhil Kumar",
    age: 21,
    [mySym]: "mykey1",
    location: "Jaipur",
    email: "nikhil@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

// console.log(typeof JsUser[mySym]);


JsUser.email = "nikhil@chatgpt.com"
// console.log(JsUser);

// Object.freeze(JsUser)
JsUser.email = "nikhil@yahoo.com"
// console.log(JsUser);

JsUser.greeting = function () {
    console.log("Hello JS user");
}

console.log(JsUser.greeting());

JsUser.greetingTwo = function () {
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greetingTwo());