// String indexing 

let firstName = "   hamzaabcdefghi   ";
//string are immutable so any string method will return a new string 

//  h    a   m   z   a  
//  0    1   2   3   4


console.log(firstName[6]);
console.log(firstName.length);
console.log(firstName[firstName.length-5]);

// last Index : length - 1 

console.log(firstName.trim().length); //trims the spaces around string
// using trims gives a new string 
console.log(firstName.toUpperCase());
console.log(firstName.toLowerCase());

firstName = "hamzaabcedefg"
let newString = firstName.slice(0,5); // includes 0 to 4th index
let secondNewString = firstName.slice(5); // slices after the 4th index

console.log(newString);
console.log(secondNewString);

//string concation 
let string1 = "Muhammad"
let string2 = "Hamza"

let fullName = string1 + " " + string2
console.log(fullName);


//template string
// use of back ticks
let age = 24;
let nameUser = "Hamza"

let aboutMe = `My Name is ${nameUser} and my age is ${age}`
console.log(aboutMe);