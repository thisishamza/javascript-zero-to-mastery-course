
// primitve vs reference data types
/* Primitive types are stored in stack. 
Primitive type dont take too much space. */

//primitive types
let num1 = 6;
let num2 = num1; // num2 will have different place in memory
console.log("value is num1 is", num1);
console.log("value is num2 is", num2);
num1++;
console.log("after incrementing num1")
console.log("value is num1 is", num1); // num1 = 7
console.log("value is num2 is", num2); // num2 = 6


/* Reference types are stored in heap 
with pointers for address stored in stack.
Stack will contain all the address of the data in the heap.
*/

// reference types 
// array 
let array1 = ["item1", "item2"];
let array2 = array1; // new pointer in stack pointing to same data in heap
console.log("array1", array1);
console.log("array2", array2);
array1.push("item3"); //pushing to the same address which both pointers are pointing too
console.log("after pushing element to array 1");
console.log("array1", array1);
console.log("array2", array2);


