// var c = 50
let a = 90

if (true) {
    let a = 10
    const b= 20
    var c = 30
    // console.log("Inner: ", a)
    
}

// console.log(a);
// console.log(b);
// console.log(c);


function one () {
    const username ="Nikhil"

    function two (){
    const website = "Youtube"
    console.log(username)
    }
    // console.log(website)
    two()
}
// one()

if (true) {
    const username = "Nikhil"

    if (username === "Nikhil") {
        const website = " youtube"
        // console.log(username + website)
        
    }
    // console.log(website);

}
// console.log(username);


// ++++++++++++++++++++++++++++++++++++   INTERESTING   ++++++++++++++++++++++++++//


// console.log(addOne(5))

function addOne (num1) {
    return num1 + 1
}


const addTwo = function (num1) {
    return num1 + 2
}
//  console.log(addTwo(6))



0