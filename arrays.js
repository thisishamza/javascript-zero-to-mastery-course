// arrays are reference type
// arrays are ordered collections of items

// all reference types can be callled objects so array are objects


let fruits= ['mango','apple','grapes','apricot'];

let mixed = ['mango',1,1.4,] //can store any datatype in arrays
mixed[1]= 2;
console.log(mixed)
console.log(typeof mixed) // this will return object by default
//to check if its array or not (this return true or false)
console.log(Array.isArray(mixed))


//array methods
mixed.push("test"); // add items at the end of string
console.log(mixed);

mixed.pop() // removes and returns the last element from the arrray
console.log(mixed)

// unshit (to add item on the start of array)
mixed.unshift("first");
console.log(mixed);

// shift (to remove item from the start and return that item)
mixed.shift();
console.log(mixed);


/* push and pop are fast compared to shift and unshift becuase 
shift and unshift have to move elements first then add the elements in the start
*/


// clone array keeping in mind reference type
// concatenate two arrays 

let array1 = ['first','second','third']
let array2= ['first','second','third']
console.log(array1===array2) //both are different objects

//use slice method to give new array
let array3 = array1.slice(0); //complete new array

//concat way
let array4 = [].concat(array1); //concat with empty array1

//using spread operator
let array5 = [...array1];
let array6 = [...array1,'fourth','fifth'];
let array7 = [...array1,...array6]
//fasted method is slice but spread method is more readable
// and also used in react


//loops in array
// length is the most imp property of a array
let fruits= ["apple","mango","grape"]
console.log(fruits.length);
console.log(fruits[fruits.length-2]) //print the second last element

let tempFruits = [];
for (let i=0; i<=fruits.length-1;i++){
    console.log(fruits[i].toUpperCase());
    tempFruits.push(fruits[i].toUpperCase());
}


//use const for creating array

const fruits = ['apple', 'banana']; 
fruits.push('mango'); //wont be a error even if its constant
console.log(fruits);
//try to use const for creating primitive data types because it will be less error prone


//Array destructuring
const myArray = ['val1','val2'];
let [myvar1,myvar2] = myArray; 
//array will be destructured first index value stored in myvar1 and second value in myvar2

let [myvar1,myvar2,myvar3] = myArray
//myvar3 will be undefined
 
const tempArray = ["val1","val2","val3"]
let [myvar1,,myvar2] = myArray //second index value will be skipped

const tempArray1 = ["val1","val2","val3"]
let [myvar1, ...newTempArray] = tempArray1
//val2 and val3 will be added into new temp array