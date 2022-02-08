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





// call
// apply
// bind

function hello() { 
    console.log("hello world")
}
hello.call(); // call is used to call any function

function aboutDetailedGlobal(hobby, favMusician) {
    console.log(this.firstname, this.age);
}


const user1={
    firstname: "hamza",
    age: 19,
    about: function() {
        console.log(this.firstname, this.age);
    },
    aboutDetailed: function(hobby. favMusician) {
        console.log(this.firstname, this.age);
    }
}


const user2={
    firstname: "hamza",
    age: 19,
}

/* we are calling the function of obj user1 
and passing it the user2 object then, 
this contains the obj2 , so firstName and age 
of user2 will be consoled on screen */

user1.about.call(user2);


user1.aboutDetailed.call(user2,"guitar","musician");
aboutDetailedGlobal.call(user2,"guitar","musician");  // this function is not defined inside object


// apply is just like call(internally it is using the call method)

user.aboutDetailed.apply(user2,["guitar","mozart"]);
aboutDetailedGlobal.apply(user2,["guitar","mozart"]);


// bind returns a function which can be called later
const func=user.aboutDetailed.bind(user1,["guitar","mozart"]);
const func=aboutDetailedGlobal.bind(user1,["guitar","mozart"]);

func();  //bind returned a function 
