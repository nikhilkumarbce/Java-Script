const user = {
    username: "Nikhil",
    price: 999,

    welcomeMessage :function(){
        console.log(`${this.username} , welcome to website.`)
        console.log(this);
    }

}
// user.welcomeMessage()
// user.username = "Wam"
// user.welcomeMessage()

// console.log(this);

// function chai (){
//     const username = "Nikhil"
//     console.log(this.username)
// }

// chai()


// const chai = function() {
//     const username = "Nikhil"
//     console.log(this.username)
// }
// chai()


const chai = () => {
    const username = "Nikhil"
    console.log(this)
}
// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) =>  (num1 + num2)

const addTwo = (num1, num2) => ( {username: "Nikhil"})

console.log(addTwo(4,5))