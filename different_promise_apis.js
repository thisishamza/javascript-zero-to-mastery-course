// Promise.all is used to run multiple promises in parallel and wait for all of them to resolve or any one to reject.

// Promise.allSettled is used to run multiple promises in parallel and wait for all of them to resolve, regardless of whether they were fulfilled or rejected.

// Promise.race is used to run multiple promises in parallel and return the result of the first promise that resolves or rejects.

// Promise.any is used to run multiple promises in parallel and return the result of the first promise that fulfills, ignoring any that reject.

//dummy promises

const p1 = new Promise((resolve, reject) => {
    // setTimeout(() => resolve("Result from Promise 1"), 3000);
    setTimeout(() => reject("Failure from Promise 1"), 3000);
})
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Result from Promise 2"), 1000);
    // setTimeout(() => reject("Failure from Promise 2"), 1000);
})
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Result from Promise 3"), 2000);
    // setTimeout(() => reject("Failure from Promise 3"), 2000);
})

// promise.all
Promise.all([p1,p2,p3]).then((results) => {
    console.log("Promise.all:", results);
}).catch((err) => {
    console.error("Promise.All Error:", err);
})

// promise.allSettled
Promise.allSettled([p1,p2,p3]).then((results) => {
    console.log("Promise.allSettled:", results);
}).catch((err) => {
    console.error("Promise.allSettled Error:", err);
})

//promise.race
Promise.race([p1,p2,p3]).then((results) => {
    console.log("Promise.race:", results);
}).catch((err) => {
    console.error("Promise.race Error:", err);
})


//promise.any
Promise.any([p1,p2,p3]).then((results) => {
    console.log("Promise.any:", results);
}).catch((err) => {
    console.error("Promise.any Error:", err);
    console.log(err.errors); // for aggregated errors list
})