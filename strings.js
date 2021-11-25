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