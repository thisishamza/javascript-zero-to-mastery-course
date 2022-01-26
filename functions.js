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