// const tinderUser = new Object() // This is a singleton object.

const tinderUser = {}    //this is not singleton

tinderUser.id = "123abcd"
tinderUser.name = "Nik"
tinderUser.isLoggedIn = false

// console.log(tinderUser);


const regularUser = {
    email : "none@gmail.com",
    fullname : {
        userfullname:{
        firstname: "Nikhil",
        lastname: "Kumar"
    }
}
}
// console.log(regularUser.fullname.userfullname.lastname);


const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}
const obj3 = {5:"e", 6:"f"}

// const obj4 = Object.assign({},obj1,obj2,obj3)
const obj4 = {...obj1, ...obj2, ...obj3}
// console.log(obj4);

const users = [
    {
        id: 1,
        email:"n@gmail.com"
    },
    {
        id: 2,
        email:"i@gmail.com"
    },
    {
        id: 3,
        email:"k@gmail.com"
    },

]

// console.log(users[0].email);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "JS in hindi",
    price: 999,
    courseInstructor: "Hitesh" 
}

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "Nikhil",
//     "coursename": "Js in hindi",
//     "price": "free"
// }