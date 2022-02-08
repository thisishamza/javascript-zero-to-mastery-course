/*
methods : methods are function inside object
*/

// this value is determined at runtime


function personInfo() { //this function can also be defined inside object
    console.log(`person name is ${this.firstname}`);
}

const person = {
    firstName: "hamza",
    age: 8,
    about: personInfo
}


const person1 = {
    firstName: "hamza",
    age: 8,
    about: function () {
        console.log(`person name is ${this.firstname}`);
        // this is a object , which this function is calling
        // person is calling the function so this contains the whole person oject
    }
}

person.about();

// if we just do this
console.log(this); // then window object will be printed

function myFunction() {
    "user strict"   // if we use strict mode then undefined will be consoled
    console.log(this);
}
myFunc(); //again window object will be printed


