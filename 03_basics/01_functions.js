function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))


function claculateCartPrice(val1, val2, ...num1) {
    return num1
}

// console.log(claculateCartPrice(100,200,400,500));


const user = {
    username: "Nikhil",
    price: 412
}

function hanndleObject (anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// hanndleObject(user)

hanndleObject({
    username:"Random",
    price: 214
})



const myNewArray = [100,200,500,600]

function secondValue (getArray) {
    return getArray[3]
}

console.log(secondValue(myNewArray));