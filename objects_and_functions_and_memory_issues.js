//normal way to create an object
const user = {
    firstName = "muhammad",
    lastName = "hamza",
    email = "test@gmail.com",
    age = 23,
    address = "House no. ,colony , city",
    about = function () {
        return `${this.firstName} is ${this.age} years old.`;
    },
    is18 =  function () {
        return this.age >= 18;
    }
};


// function (that function create object)
// 2.) add key value pair 
// 3.) will return object


// create multiple objects using function
function createUser(firstName, lastName, email, age, address) {
    const user = {}; //empty object
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = function () {
        return `${this.firstName} is ${this.age} years old.`;
    };
    user.is18 = function () {
        return this.age >= 18;
    }
    return user;
}

const user1 = createUser('harshit', 'vashsith', 'harshit@gmail.com', 19, "my address");
console.log(user1);
const is18 = user1.is18();
console.log(is18);
const about = user1.about();
console.log(about);


// there are some issue in the above approach to create a user using function

// whenever this user is created all the method in that user will get created agian
// this will take a lot of memory, so methods like is18() and about() should be declared differently

const user1 = createUser('harshit', 'vashsith', 'harshit@gmail.com', 9, "my address");
const user2 = createUser('harsh', 'vashsith', 'harshit@gmail.com', 19, "my address");
const user3 = createUser('mohit', 'vashsitha', 'harshit@gmail.com', 17, "my address");
console.log(user1.about());
console.log(user3.about());



// create a new object containing those methods
// these will be stored in memory and won't be decalared again
// so this won't take a lot of memory

const userMethods = {
    about = function () {
        return `${this.firstName} is ${this.age} years old.`;
    },
    is18 = function () {
        return this.age >= 18;
    }
}


function createUser(firstName, lastName, email, age, address) {
    const user = {}; 
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = userMethods.about;  // these are just referencing to already created functions
    user.is18 = userMethods.is18;
    return user;
}
