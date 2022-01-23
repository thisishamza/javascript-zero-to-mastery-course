// while and for in loop are use sporadically
//mostly the simple for loop and for of loop are used for arrays

// for of loop in array
const fruits = ["apple","mango","grapes","oranges"];
const fruits2 = [];
for(let fruit of fruits) {
    fruits2.push(fruit);
    console.log(fruit);
}


//for in loop
const fruits = ["apple","mango","grapes","oranges"];
const fruits2 = [];
for(let index in fruits) {
    fruits2.push(fruits[index]);
    console.log(fruits[index]);
}
//this loop works on index