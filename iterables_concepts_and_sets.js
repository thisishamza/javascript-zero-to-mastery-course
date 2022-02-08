// iterables
// on which we can apply loop like string, arrays

// for off loop on string
const firstName = "Harshit";
for (let char of firstName){
    console.log(char);
}
console.log(firstName.length); //have length
console.log(firstName[2]); // can be accesed by index


const items=["itme1","item2","item3"];
for (let item of items){
    console.log(item);
}


//array like objects which have length opportunity
//also can be accessed using index

const users={'key1':'val1','key2':'val2'}; //this is not iterable


// sets
// sets are iterables
// store data(stored in linear way like array)
// sets also have its own methods
// no index based access
// order is not guaranteed
// sets only have unique elements
// in real world use sets when storing user ids because they are unique
// cannot used length property on set

const numbers = new Set([1,2,3]);
const numbers = new Set("123"); //can use string because string is also iterable
console.log(numbers)

console.log(numbers[2]) // will answer undefined because no index based access in sets

const numbers = new Set();  //empty set
const array = ['item1','item2']
numbers.add(1);
numbers.add(2);
numbers.add(3);
numbers.add(array);
console.log(numbers);

//check if set contains a number using has method
if(numbers.has(1)){
    console.log("1 is in set");
}
else{
    console.log("1 is not in set")
}

//loop through the set

for (number of numbers) {
    console.log(numbers);
}


// sets can be used to get unique elements from an array

const myArray = [1,3,4,4,3,4,2,5,6,7,7,8]
const uniqueElements = new Set(myArray);
console.log(uniqueElements); // unique elements
