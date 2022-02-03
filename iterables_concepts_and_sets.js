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

