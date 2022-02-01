//important array methods
//forEach
//map
//filter
//reduce

//forEach

const numbers=[4,5,2,8]
function multiplyByTwo(number, index){
    console.log("Index is", index);
    console.log(number*2);
}
//normal method
for (let i=0; i<numbers.length; i++) { //this loop will iterate over array
    multiplyByTwo(numbers[i],i) //and will multiply each number with 2 
}

//for each method
/* forEach is just like loop, will iterate over each elements
for each elenment it will call the callback function */

numbers.forEach(multiplyByTwo); // mutiplyByTwo a callback function actually 

// let try defining callback function as a anonymous function in forEach
numbers.forEach(function(numbers, index) {
    console.log(`index is ${index} and numbers is ${numbers}`)
});

const users = [
    {firstName: 'John', age: 34},
    {firstName: 'test', age: 34},
    {firstName: 'test1', age: 34},
    {firstName: 'test2', age: 34},
]
//this will print all the firstName of all objects in users
users.forEach(function(obj){
    console.log(obj.firstName)
});
//trying this will arrow function
users.forEach((obj) => {
    console.log(obj.firstName)
});



//map method
const numbers = [1,2,3,4,5,6,7];
// map method also take callback function as input

const square=function(number) {
    return number*numbers;
}

//map function will call callback function for each iteration
//map function return an array
const squareNumber=numbers.map(square);

/* if we dont return anything in the callback function, then undefined 
 will be returned in the squareNumber array by using map method
 it is crucial to return in callback function for map */

//function to store firstName of alluser
const users = [
    {firstName: 'John', age: 34},
    {firstName: 'test', age: 34},
    {firstName: 'test1', age: 34},
    {firstName: 'test2', age: 34},
]

const firstNameArray = users.map((user) =>{
    return user.firstName
});


// filter method
const numbers=[1,2,3,4,5,6,7,8,9,10,11]
/* filter takes in a callback function and that callback function will always
 return true or false. */

//filter all the even numbers from the array
const isEven = (number) =>{return number%2===0;};
const evenNumbers= numbers.filter(isEven);


// reduce method

const numbers = [1,2,3,4,5,10]
//reduce takes in a callback function
 
// sum all elements of a array
const sum = numbers.reduce((accumulator, cuurentValue) => {
    return accumulator + cuurentValue;
});

/* accumulator takes in the first element of the array and current values contains
the second value in the first iteration then iteration starts*/

const sum = numbers.reduce((accumulator, cuurentValue) => {
    return accumulator + cuurentValue;
},100);

// accumulator , cuurentValue , return
// 1                 2            3
// 3                 3            6
// 6                 4            10
// 10                5            15
// 15                10           25

// you can also pass initial value with callback function
/*passing a default value means that will be value of accumulator
for the first time and current value will be same (2 in this case)*/ 


// real world example for reduce method

const userCart = [
    {productId:1, productName:"mobile", price:1299},
    {productId:2, productName:"laptop", price:22000},
    {productId:3, productName:"pc", price:1000}
]

const totalAmount = userCart.reduce((totalPrice,currentProduct) =>{
    return totalPrice + currentProduct.price;
});

// total price  //currentValue  //return
// 0                {}              1299
// 1299             220000          23299
// 23299            1000            24299
