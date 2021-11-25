"use strict";
//this will restrict the declaration of variables without using var keyword
//username = 'test' Uncaught ReferenceError becuase of using "use strict"


var value1 = 2;
console.log(value1);


var firstName = "test";
firstName="test2"
console.log(firstName);

//let  keyword
// prefer using let over var keyword
let firstName = "test" //this will be an error because firstName is already declared above with var keyword
// let firstName = "test1"   This will be an error message because firstName is already declared with let
console.log(firstName); 


//const keyword
const pi = 3.141592653589793
// pi value cannot be changed now because it is a constant
console.log(pi)



// rules for naming variables 

// you cannot start with number 
// example :- 
// 1value (invalid)
// value1 (valid)


// you can use only undersore _ or dollar symbol 
// first_name (valid)
// _firstname (valid) 

// first$name (valid)
// $firstname (valid)

// you cannot use spaces 
// var first_name = "harshit"; // snake case writing 
// var firstName = "harshit"; // camel case writing 
// first name (invalid)

// convention 
// start with small letter and use camelCase 
