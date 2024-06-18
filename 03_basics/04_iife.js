// IMMEDIATELY INVOKED FUNCTION EXPRESSION //

(function chai () {
    //named iife
    console.log(`DB CONNECTED`)
}) ();


( (name) => {
    console.log(`DB CONNECTED TWO ${name}`)
}) ("Nikhil")