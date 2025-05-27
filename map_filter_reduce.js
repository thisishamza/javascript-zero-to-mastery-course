// Map function

const arr = [1, 2, 3, 4, 5];

// Double - [2, 4, 6, 8, 10]
// Triple - [3, 6, 9, 12, 15]
// Binary - [1, 10, 11, 100, 101]

function double(x) {
    return x * 2;
}

function  triple(x) {
    return x * 3;
}
function binary(x) {
    return x.toString(2);
}

const output = arr.map(binary)
console.log(output);

const outputDouble = arr.map((x) => x * 2)
console.log(outputDouble);

//Filter function

//Filter function is used to filter the elements of an array based on a condition.
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//filter even numbers
const output1 = arr1.filter((x) => x % 2 === 0);
console.log(output1); // [2, 4, 6, 8, 10]


//filter numbers greater than 6
const output2 = arr1.filter((x) => x > 6);
console.log(output2);


//Reduce function
//Reduce function is used to reduce the elements of an array to a single value.

const arr2 = [1, 2, 3, 4, 5];
//sum of all elements

// first writting a normal function manually wihout using reduce
function findSum(arr){
    let sum = 0;
    for (let i = 0; i<arr.length; i++){
        sum += arr[i];
    }
    return sum;
}
console.log(findSum(arr2));

// now using reduce function
//accumulator is the value returned by the previous iteration
// currentValue is the current element being processed in the array

const sum = arr2.reduce ((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0); // 0 is the initial value of the accumulator
console.log(sum); // 15


//Find the maximum value in an array

// without reduce function
function findMax(arr){
    let max = 0;
    for (let i = 0; i<arr.length; i++){
        if (arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}
console.log(findMax(arr2));

let max = arr2.reduce((acc, curr) => {
    if(curr > acc) {
        acc = curr;
    }
    return acc;
}, 0); // 0 is the initial value of the accumulator

console.log("Max using reduce: ",max);


const users = [
    {firstName: "John", lastName: "Ionut",age: 25},
    {firstName: "Rock", lastName: "Caitilin", age: 30},
    {firstName: "Beth", lastName: "Ihor", age: 15},
    {firstName: "Jason", lastName: "Mykhailo", age: 30}];

// find full names of users
let fullNames = users.map((user) => {
    return user.firstName + " " + user.lastName;
})
console.log(fullNames);

// find users with same age
let sameAge = users.reduce((acc, curr) => {
    if(acc[curr.age]){
        acc[curr.age] = ++acc[curr.age];
    }else{
        acc[curr.age] = 1;
    }
    return acc;
}, {});

console.log(sameAge);

// filter first name of people with age < 30
let youngUsers = users.filter((user) => user.age < 30)
    .map((user) => user.firstName);

console.log(youngUsers);

let youngUsers2 = users.reduce((acc, curr) => {
    let user = [];
    if (curr.age < 30) {
        user.push(curr.firstName);
    }
    return user;
})

console.log(youngUsers)