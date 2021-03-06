// objects reference type  
// arrays are good but not sufficient 
// for real world data 
// objects store key value pairs 
// objects don't have index

// how to create objects 
// key are also called properties

// object literal
// keys of objects can be just strings or symbols

// key -> string 
// key -> symbol
const person = {
    firstName : "harshit",
    age: 7,
    1:"one"  //1 will be converted into string
}
console.log(person.firstName);


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

//computed properties
const key1= "objkey1";
const key2= "objkey2";

const value1 = "myValue1";
const value2 = "myValue2";

const obj={
    key1: value1,
    key2: value2
}
//this will create an object like key1:myValue1 , key2:myValue2;
// computation wont happen for keys

const obj={
    [key1]: value1,
    [key2]: value2
}
//this will create an object like objkey1 : myValue1 , objkey2:myValue2

const obj1 = {
    key1 : "value1",  //this will not be error even though we have to two same keys
    key2 : "value2",    // the created obj1 will have key2 : "value2" and key1: "value3" 
    key1: "value3",    // second assignemt will replace the first one for the key
};


//note for spread operator for arrays
const myArray = [..."1234"]; // array will elements 1, 2 ,3 ,4

//spread operator in objects
const obj1 = {
    key1 : "value1"
};
const obj2 = {
    key2 : "value2"
};

const newObject = {...obj1};  //clone of obj1
const newObject = {...obj1,...obj2} //new object with both values


const obj1 = {
    key1 : "value1"
};
const obj2 = {
    key1: "value3",
    key2 : "value2"
};

const newObject = {...obj1,...obj2} //new object with both values but key1 from obj2

const newObject = {...obj1,...obj2, key4: "test"} //new pbject with extra key

const newObject = {... "abc"} //new objects with index as key and a as values
// 0: a , 1: b, 2:c



// object destructuring
const band = {
    bandName: "queens",
    famousSong: "bohemian ",
    year: 2000,
    secondFamousSong: "radio"
};
//usual way
const bandName = band.bandName ;
const famousSong = band.famousSong; 

//shortcut 
const{bandName, famousSong} = band;
const{bandName, famousSong, ...restProps} = band; //for remaining properties


// objects into arrays
// very useful in real world applications

const users = [
    { userid:1,firstname: 'John', gender: 'male'},
    { userid:1,firstname: 'Ragnor', gender: 'male'},
    { userid:1,firstname: 'Stella', gender: 'female'},
]
console.log(users)
for(let user of users){
    console.log(user.userid); //prints all the userids in all objects inside the array
}

//nested destructuring of array of objects

const[user1,user2,user3]=users; //objects in different constants
// destructure from inside an object array
const[{firstname},,{gender}]=users;
const[{firstname: userfirstname},,{gender}]=users; //new variable will be created userfirstname




// some usefull methods for objects

// clone using Object.assign

//memory

const obj={
    key1:"value1";
    key2:"value2";
}

const obj2 = obj; //pointing at the same address

// clone using spread operator
const obj2 = [...obj];

// clone using obj.assign
const obj2 = Object.assign({}, obj);

obj.key3 = "value3";

console.log(obj) //both obj and obj will be same
console.log(obj2)



// optional chaining

const user = {
    firstName: "first",
    address: {houseNumber:'45453'}
}

console.log(user.firstName);
console.log(user.address.houseNumber);

//if the user exits and then address exits then use ?
// used for chained objects
console.log(user?.address?.houseNumber);
