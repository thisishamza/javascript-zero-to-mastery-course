// there are still some issues in the above way of creating objects
// lets suppose we want to add another method than we will declare the method in userMethods and also reference it in the user object


// simple example for understanding how proto works

const obj1 = {
    key1: "value1",
    key2: "value2"
}

// __proto__

// offical ecmascript documentation [[prototype]]

// __proto__ , [[prototype]]    both are same

// prototype    but this is different

const obj2 = Object.create(obj1); // create is setting __proto__ property of obj2
//now obj2 proto contains obj1 attributes

// there is one more way to create empty object
obj2.key3 = "value3";
// obj2.key2 = "unique";
console.log(obj2);

console.log(obj2.__proto__);



// now lets work on our issue
// this is a better approach on the previous both approaches

const userMethods = {
    about = function () {
        return `${this.firstName} is ${this.age} years old.`;
    },
    is18 = function () {
        return this.age >= 18;
    },
    test = function () {
        console.log("we are testing")
    }
}


function createUser(firstName, lastName, email, age, address) {
    const user = Object.create(userMethods);  // now any new function added in userMethods will already be included in User object
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    return user;
}

