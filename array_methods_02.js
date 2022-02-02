// sort method 
// ASCII TABLE 
//char : ascii value


// '0' : 48
// '1' : 49
// '2' : 50
// '3' : 51
// '4' : 52
// '5' : 53
// '6' : 54
// '7' : 55
// '8' : 56
// '9' : 57


// ':' : 58
// ';' : 59
// '<' : 60
// '=' : 61
// '>' : 62
// '?' : 63
// '@' : 64


// 'A' : 65
// 'B' : 66
// 'C' : 67
// 'D' : 68
// 'E' : 69
// 'F' : 70
// 'G' : 71
// 'H' : 72
// 'I' : 73
// 'J' : 74
// 'K' : 75
// 'L' : 76
// 'M' : 77
// 'N' : 78
// 'O' : 79
// 'P' : 80
// 'Q' : 81
// 'R' : 82
// 'S' : 83
// 'T' : 84
// 'U' : 85
// 'V' : 86
// 'W' : 87
// 'X' : 88
// 'Y' : 89
// 'Z' : 90



// '[' : 91
// '\' : 92
// ']' : 93
// '^' : 94
// '_' : 95
// '`' : 96



// 'a' : 97
// 'b' : 98
// 'c' : 99
// 'd' : 100
// 'e' : 101
// 'f' : 102
// 'g' : 103
// 'h' : 104
// 'i' : 105
// 'j' : 106
// 'k' : 107
// 'l' : 108
// 'm' : 109
// 'n' : 110
// 'o' : 111
// 'p' : 112
// 'q' : 113
// 'r' : 114
// 's' : 115
// 't' : 116
// 'u' : 117
// 'v' : 118
// 'w' : 119
// 'x' : 120
// 'y' : 121
// 'z' : 122
// '{' : 123
// '|' : 124
// '}' : 125

//sort
5,9,1200,488,3000

//sort method in javascript
//sort method will mutate the original string

const numbers=[5,9,334,22,25]
numbers.sort(); //this will change the numbers arrays
console.log(numbers); 

/* 
javascript does not sort them considering them number but instead it
consider them strings then sort them, string as sorted on the basis of
ASCII code of first character
*/
const userName = ['hamza','ahmed','bilal']
userName.sort(); //will be sorted as expected based on ASCII of first character

//if you want sort method to sort numbers then you can
//sort method can take a callback function
const numbers = [5,9,334,22,25]
numbers.sort((a,b)=>{
    return a=b;
})

// a - b ----> positive then b, a
// a - b ----> negative then a, b

numbers.sort((a,b) => {a-b});    //for ascending sort
numbers.sort((a,b) => {b-a});    //for descending sort
 
//real world example

const products = [
    {productId:1,prductName: 'p1',price:300},
    {productId:3,prductName: 'p2',price:600},
    {productId:3,prductName: 'p3',price:200},
    {productId:4,prductName: 'p4',price:2200},
]

//sort low to high
products.sort((a,b)=>{
    return a.price - b.price
});

//sort high to low
products.sort((a,b)=>{
    return b.price - a.price
});

/*if you dont want sort to mutate products then
 clone products using any method */
const lowToHigh= products.slice(0).sort((a,b)=>{
    return a.price - b.price
});




// Find Method
const myArray = ["hello","cat","dog","lion"];

function isLength3(string){
    return string.length === 3 ;
}

myArray.find(isLength3); //will return the first element of length 3
myArray.find((string)=> string.length === 3); 

//real world example 

const users = [
    {userId:1,userName:"John"},
    {userId:2,userName:"test"},
    {userId:3,userName:"test2"},
]

users.find(user => user.userId === 3);


//every method
// checks a condition at every element of the array

const numbers=[2,4,6,8,10];

/* every method also takes in callback function
callback function will return boolean,
Every method also return Boolean */

//to check if every element in the array are even
numbers.every(number =>number%2===0);

//real world example


const products = [
    {productId:1,prductName: 'p1',price:300}, 
    {productId:3,prductName: 'p2',price:600},
    {productId:3,prductName: 'p3',price:200},
    {productId:4,prductName: 'p4',price:2200},
]

//to check if all products are below 300000

products.every(cartItem => cartItem.price > 30000);


// Some method
// checks if any of elements satisfy the condition
const numbers=[2,4,6,3,10];

//check if any true
numbers.some(numbers=>numbers%2===0);

// real world example for some method

const products = [
    {productId:1,prductName: 'p1',price:300}, 
    {productId:3,prductName: 'p2',price:600},
    {productId:3,prductName: 'p3',price:200},
    {productId:4,prductName: 'p4',price:2200},
]

//to check if all products are below 300000

products.sum(cartItem => cartItem.price > 30000); 
//return false because their is not element with price more than 300000



//Fill Method
//fill mutates the original array
// create new array of size 10 with every element = 0
const myArray = new Array(10).fill(0);
//fill an already filled array with numbers

const myArray = [1,2,3,4,5,6,7,8];
// write   start    end
myArray.fill(0,2,5);




//Splice Method
// splices changes the original array

//start , delete, insert

const myArray = ['itemm1', 'itemm2', 'item3'];

//delete
myArray.splice(1, 1)   //delete item2
//when we used delete it also returns the deleted item

//insert
myArray.splice(1, 0 , 'new item') // new item will inserted at index 1 

//insert and delete 
myArray.splice(1,2,"inserted item1","inserted item2")
// this del item2 and item 3 and inserts the above items
