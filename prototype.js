
// function ===> function + object
// functions are also objects in javascript
function hello(){
    console.log("hello");
}

console.log(hello.name); // this will print the name of function
// name property ==> tells function names

// you can add your own properties 
hello.myOwnProperty = "very unique value"; //function is behaving like object
console.log(hello.myOwnProperty);



// function provides more usefull properties.
// function provides an empty object called prototype 

console.log(hello.prototype); // {}

// only functions provide prototype property
if(hello.prototype){
    console.log("prototype exits");
}else{
    console.log("prototype is not present");
}
hello.prototype.abc = "abc";
hello.prototype.xyz = "xyz";
hello.prototype.sing = function(){
    return "lalalla";
};
console.log(hello.prototype.sing());

