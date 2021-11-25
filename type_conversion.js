// typeof operator 

// data types (primitive data types)
// string "hamza"
// number 2, 4, 5.6 
// booleans 
// undefined
// null 
// BigInt
// Symbol

let age = 24; 
let firstName = "hamza";

console.log(typeof firstName);

// convert number to string. 
age = age + ""; //added an empty string witht the number
console.log(typeof(age));

age=String(age);
console.log(typeof age);



// convert string to number. 

let myStr = +"34"; // just add a plus sign with the string to convert it into a number
console.log(typeof myStr);

age = "18";
age = Number(age); 
console.log(typeof age);