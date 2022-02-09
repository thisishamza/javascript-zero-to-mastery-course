
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


// Now lets use prototype for user's object creation

function createUser(firstName, lastName, email, age, address){
    const user = Object.create(createUser.prototype); // linking __proto__ with function prototype
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
console.log(user1.sing());
