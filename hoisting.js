// console.log(x);
// foo();
// console.log(foo);
//
//
// var x = 7;
// function foo() {
//     console.log("hello javascript");
// }

//with hoisting you can access the variables and functions before they are declared

var y = 20;
debugger;
console.log(y);
a();
console.log(y);
b();
console.log(y);

function a(){
    var y = 30;
    console.log(y);
}

function b(){
    var y = 40;
    console.log(y);
}