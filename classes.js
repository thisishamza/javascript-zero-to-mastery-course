// 2015 / es6 
// class keyword 
// class are fake

class CreateUser{
    constructor(firstName, lastName, email, age, address){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.address = address;
    }

    about(){
        return `${this.firstName} is ${this.age} years old.`;
    }
    is18(){
        return this.age >= 18;
    }
    sing(){
        return "la la la la ";
    }

}

// new keyword is need to invoke the contructor of class
const user1 = new CreateUser('harshit', 'vashsith', 'harshit@gmail.com', 18, "my address");
const user2 = new CreateUser('harsh', 'vashsith', 'harshit@gmail.com', 19, "my address");
const user3 = new CreateUser('mohit', 'vashsitha', 'harshit@gmail.com', 17, "my address");
// console.log(Object.getPrototypeOf(user1));


// inheritance
class Animal{
    constructor(name, age){
        this.name = name
        this.age = age
    }
    eat(){
        return `${this.name} is eating.`;
    }
    isSuperCute(){
        return this.age <=1;
    }
}

const animal1 = new Animal("tom",2);
console.log(animal.eat())

class Dog extends Animal{
    constructor(name, age, speed){
        super(name, age); //calling constructor of parent
        this.speed = speed;
    }
    eat(){ //javascript will first look for this meethod instead of parent class
        return `Modified Eat: ${this.name} is eating`
    }
    run(){
        console.log(`${this.name} is running.`)
    }
}

const dog_var = new Dog ("tommy",3,25);
console.log(dog_var)

