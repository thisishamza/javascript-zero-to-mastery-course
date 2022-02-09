function hello(){
    console.log("hello world");
}

// javascript function ===> function  + object

console.log(hello.name);

// you can add your own properties 
hello.myOwnProperty = "very unique value";
console.log(hello.myOwnProperty);

// name property ---> tells function name;

// function provides more usefull properties.

console.log(hello.prototype); // {}

// only functions provide prototype property

hello.prototype.abc = "abc";
hello.prototype.xyz = "xyz";
hello.prototype.sing = function(){
    return "lalalla";
};
console.log(hello.prototype.sing());

    /*************************************/


// now using prototype for object creation with methods
function createUser(firstName, lastName, email, age, address){
    const user = Object.create(createUser.prototype);// linking between __proto__ and prototype
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    return user;
}
createUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old.`;
};
createUser.prototype.is18 = function (){
    return this.age >= 18; 
}
createUser.prototype.sing = function (){
    return "la la la la ";
}


const user1 = createUser('harshit', 'vashsith', 'harshit@gmail.com', 18, "my address");
const user2 = createUser('harsh', 'vashsith', 'harshit@gmail.com', 19, "my address");
const user3 = createUser('mohit', 'vashsitha', 'harshit@gmail.com', 17, "my address");
console.log(user1);
console.log(user1.is18());

    /*************************************/

// new keyword 
// 1.) creates and empty object
// 2.) this = {}
// 3.) return {} 

// __proto__ 
// // official ecmascript document
// [[prototype]]

// constructor function 
/* if we are creating a function which can be called using new then it
 is a convention to use first letter of function name to be capital */
function CreateUser(firstName, lastName, email, age, address){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
    // doesnot need to add return because new keyword returns on its own
}
CreateUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old.`;
};
CreateUser.prototype.is18 = function (){
    return this.age >= 18; 
}
CreateUser.prototype.sing = function (){
    return "la la la la ";
}

// new keyword will automatically set __proto__ to prototype which we were doing manually
const user1 = new CreateUser('harshit', 'vashsith', 'harshit@gmail.com', 18, "my address");
const user2 = new CreateUser('harsh', 'vashsith', 'harshit@gmail.com', 19, "my address");
const user3 = new CreateUser('mohit', 'vashsitha', 'harshit@gmail.com', 17, "my address");
console.log(user1);
console.log(user1.is18());

//if we do this then all the attributes with prototype will be consoled
for (let key in user1){
    console.log(key);
}

//if we dont want the protype to be consoled
for (let key in user1){
    if(user1.hasOwnProperty(key)){
        console.log(key);
    }
}


//Arrays are also objects because internally they are created using new array()
let numbers=[1,3,4]; // internally let numbers = new Array(1,2,3)
console.log(Object.getPrototypeOf(numbers)); 