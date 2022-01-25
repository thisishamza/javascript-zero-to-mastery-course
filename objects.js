// objects reference type  
// arrays are good but not sufficient 
// for real world data 
// objects store key value pairs 
// objects don't have index

// how to create objects 
// key are also called properties



// const person = {name:"Harshit",age:22};
const person = {
    name: "harshit",
    age: 22,
    hobbies: ["guitar", "sleeping", "listening music"]
}
console.log(person);

// how to access data from objects 
// console.log(person.name); dot notation


// how to add key value pair to objects
person["person"] = "male";
console.log(person);


//difference between dot and bracket notation
//key is by default in string that why in dot notation we dont use quotation
const person = {
    name: "harshit",
    age: 22,
    "person hobbies": ["guitar", "sleeping", "listening music"] //keep in mind space between person and hobbies
}
//if you want to access person hobbies you have to use bracket notation
// console.log(person["person hobbies"]); bracket notation
const key = "email";
//if you want to insert this key into person object
person[key] = "test@gmail.com" //if you do this then a email : "test@gmail.com" will be added to person object
person["key"] = "test@gmail.com" //if you do this then a key : "test@gmail.com" will be added to person object


//how to iterate over object
const person = {
    name: "harshit",
    age: 22,
    hobbies: ["guitar", "sleeping", "listening music"] //keep in mind space between person and hobbies
}

//for in loop
for (let key in person){
    console.log(key); //will print the keys: name , age , hobbies
    console.log(person.key); //will print undefind (cant use dot notation)
    console.log(person[key]); //will print the values
    console.log(`${key} : ${person[key]}`); //will print the values
}

console.log(Object.keys(person)); //will return all the keys  

//for off loop
for (let key of object.keys(person)) {
    console.log(person[key]);
}