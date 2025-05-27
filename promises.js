// promise object is a placeholder for a value that will be available in the future.
// container for future value
// object representing the eventual completion (or failure) of an asynchronous operation and its resulting value.

// Promises are a way to handle asynchronous operations in JavaScript.
// They allow you to write cleaner and more readable code by avoiding callback hell.
// Promises represent a value that may not be available yet but will be resolved in the future.
// They can be in one of three states: pending, fulfilled, or rejected.
// Promise object has two methods: then and catch.


const GITHUB_API = "https://api.github.com/users/thisishamza";

//fetch returns a promise
const user = fetch(GITHUB_API);

console.log(user);

// promise object are immutable, they cannot be changed once they are created.
// promise can be resolved just once.

user.then(function(data){
    console.log(data);
})


//promise chaining
// you can chain multiple then methods to handle the response
// each then method returns a new promise
// this will help us to get rid of callback hell

fetch(GITHUB_API).then(function(data){
    return (data);
}).then(function(data){
    console.log("This is the second then method");
    return data.json(); // converting response to json
});

//can be converted to arrow function

fetch(GITHUB_API).then((data) => {
    return (data);
}).then((data) => {
    console.log("This is the second then method");
})