//if else conditions

let age = 18;
if (age > 18) {
    console.log("User can view this website");
} else {
    console.log("User cannot view this website");
}

//falsy values
//false
//null
// ""
// undefined
// 0

// truthy values
// "abc"
// 1,-1

let firstName = "";
if (firsName) {
    console.log(firsName);
} else {
    console.log("first name is empty")
}


// ternary operator
let age = 8;
let drink = age >= 5 ? "coffe" : "milk";
console.log(drink)


// and or operator
let username = "test";
if (username[0] === "t" && username[1] === "e") {
    console.log(username);
} else {
    console.log("username is not correct");
}


// nested if else

let tempInDegree = 50;


if (tempInDegree < 0) {
    console.log("extremely cold outside");
} else if (tempInDegree < 16) {
    console.log("It is cold outside");
} else if (tempInDegree < 25) {
      console.log("weather is okay ");
} else if (tempInDegree < 35) {
    console.log("lets go for swim");
} else if (tempInDegree < 45) {
    console.log("turn on AC");
} else {
    console.log("too hot!!");
}


//switch statement

let day = 2;
switch (day){
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break; //if we dont use break then will print too will all the below cases
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid day");  
}