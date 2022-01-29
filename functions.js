//DRY rule
// Dont Repeat Yourself

//function declaration
function sayWelcomeMessage(){
    console.log("Welcome to the program");
}

sayWelcomeMessage();

//function with parameters
function sumTwoNumbers(number1, number2){
    return number1 + number2;
}

console.log(sumTwoNumbers(4,5)); //arguments are passed into the function

function firstChar(anyString){
    console.log(anyString[0]);
}

function findTarget(array, target){
    for(let i=0;i<array.length;i++){
        if(array[i]===target){
            return i;
        }
    }
    return -1;
}

const tempArray = [1,32,5,6,7,3];
console.log(findTarget(tempArray,7))


//function expression
const sayWelcomeMessage= function(){
    console.log("Welcome to the program");
}


// arrow functions
const sayWelcomeMessage= () => {
    console.log("Welcome to the program");
};

const message = "test";
const useThisMessage= (message) => {
    console.log(message)
}

//if you have one parameter then you can write arrow function without the braces
const useThisMessage= message => {
    console.log(message)
}

// you can also write arrow function like this
const useThisMessage= message => console.log(message);


//hoisting

hello(); //function can be called before its declaration

function hello() { //function declaration
    console.log("Hello World")
}
// NOTE you can call the function before its declaration
// if you use function expression then you cannot call the function before 

console.log(hello); 
//if we used that variable before it is declared then it will behave differently based on 
// its type whether it is a var , a const or let

var hello = "Hello world"; // undefined
let hello = "Hello world"; // this will be an error
const hello = "Hello world"; // error in this case also


//function inside function
const app = () => {
    const myfunc = () => { // declaration of function inside function
        console.log("hello from my func")
    };

    const addTwoNumbers = (number1, number2) => {
        console.log(number1+number2)
    };

    console.log("inside app function");
    myfunc();  //calling function inside a function
    addTwoNumbers();
}


// lexical scope

function myApp(){ //this function is in global scope    
    const myVar = "value1";
    function myfunc(){  //myfunc lexical scope is myApp
        console.log("inside my func:" , myVar);//first look into the function then outside then the global scope
    };
    const myfunc2 = function (){};
    const myfunc3 = ()=>{};
    myfunc();
}


//block scope vs function scope

//let and const are block scope while var is function scope

{
    let firstName = "test";
    const middleName = "testing";
    console.log(firstName);
    console.log(middleName);
} // this is a block
console.log(firstName); 
console.log(middleName);
//return an error because defined inside a block scope with let and const

{
    const firstName = "hamza";
    console.log(firstName); //firstName is different variable from above block
}

{ 
    var firstName = "hamza";
}
console.log(firstName); //wont be an error because it is defined using var


function myApp() {
    if(true){
        var firstName = "hamza";
        console.log(firstName);
    }
    console.log(firstName);
}
myApp(); //var would be accessible becuase its function scope