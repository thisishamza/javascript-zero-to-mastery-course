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


// undefined datatype
let userName;
console.log(typeof userName);  //print undefined on console

// null datatype
let variables= null;
console.log(typeof variables); //print objects on console

// object is another datatype in javascript
// this is bug in javascript this effects the backward compatibility 


// bigint datatype
let myNumber = BigInt(124454654375743747457546547373742);
console.log(myNumber);
console.log(myNumber.MAX_SAFE_INTEGER);


//booleans and comparison operator
let num1 = 24;
let num2 = 6;
console.log(num1>num2);


// == vs ===
let num3 = "4"
let num4 = 4
console.log(num3 == num4);
console.log( num3 === num4);


// != vs !==
console.log(num3 !== num4);
console.log( num3 != num4);

