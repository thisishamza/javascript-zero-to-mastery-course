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