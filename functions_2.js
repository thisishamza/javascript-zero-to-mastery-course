// default parameters
function addTwoNumbers(a,b){
    if(typeof b === 'undefind'){ //previously we use to write if statements
        //for default values
        b = 0;
    }
    return a + b;
}
function addTwoNumbers(a,b=0){ //function with default parameters
    return a + b;
}

// Rest parameters
function myFunction(a,b,c){ 
    //if the declaration has three parameters then only 3 var provided in function call will be consoled
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is ${c}`);
}

// Rest parameters
function myFunction(a,b,...c){ 
    //third parameter is an array now, so everyparamter other than 2 will be added to this array
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is ${c}`);
}
myFunction(1,3,5,6,7,8,9)

function addAll(...numbers){
    console.log(numbers);
    console.log(Array.isArray(numbers));
    let total = 0;
    for (let number of numbers){
        total = total + number;
    }
    return total;
}

addAll(1,3,5,6,10,11,22)