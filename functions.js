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


//function declaration to function expression
const sayWelcomeMessage= function(){
    console.log("Welcome to the program");
}


