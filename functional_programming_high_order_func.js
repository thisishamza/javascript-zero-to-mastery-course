//High order functions
// A function that takes another function as an argument or returns a function as a result is called a high order function.
function y() {
    console.log("this is function y");
}

function x(y) {
    console.log("this is function x");
    y();
}

x(y);