"use strict";


// this in global scope
console.log(this); // Output: global object (window in browsers, in node js it's global depends where js is running)

// this inside a function
// if you are inside a function, the value of this depends on how the function is called either strict / no strict mode.
function x() {
    console.log(this);
}
x(); // output = window (no strict mode) but undefined in strict mode


// this in strict mode - (this substitution)

// if the value of this keyword is undefined or null this keyword will be replaced with the globalObject(i.e window) in non-strict mode.
// if the value of this keyword is undefined or null this keyword will be replaced with undefined in strict mode.

// this keyword value depends on how the function is called (window)
x(); //called without reference to an object, so this refers to undefined.
window.x(); // called as a method of the global object, so this still refers to the global object (window in browsers)


// this inside a object's method
const obj = {
    name: "Hamza",
    age: 27,
    about: function() {
        console.log(this);
        console.log(this.name, this.age);
    }
};
obj.about(); // this refers to the obj object, so it will print the obj object and its properties.


// call apply bind methods (sharing methods)
const obj2 = {
    name: "Ali",
    age: 30
};
obj.about.call(obj2); // value of this is set to obj2, so it will print obj2's properties

// this inside arrow function
// arrow function does not have its own this, it inherits this from the parent scope(lexical scope) where it is defined.
const obj3 = {
    name: "Sara",
    about: () => {
        console.log(this);
    }
};
obj3.about(); // Output: global object (window) becuase it inherits this from the global scope, not from obj3 (enclosing lexical context).

// this inside nested arrow function
const obj4 = {
    name: "Zara",
    about: function() {
        console.log(this.name); // this refers to obj4
        const nestedArrow = () => {
            console.log(this.name); // this refers to obj4, because arrow function inherits this from the parent scope (obj4)
        };
        nestedArrow();
    }
};
obj4.about(); // Output: "Zara" from both console logs, because arrow function inherits the value of this from the enclosing function (obj4's about method).


// this inside DOM
// In the context of DOM events, this refers to the element that triggered the event.
document.getElementById("btn").addEventListener("click", function() {
    console.log(this); // Output: the button element that was clicked
});