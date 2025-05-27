/**
 * what is async
 * what is await
 * how async await works behnd the scenes
 * example of async await
 * error handling with async await
 * interviews
 * asynch await vs promise.then/.catch
 */

// Asynch programming allows us to write code that can perform tasks without blocking the main thread, enabling better performance and responsiveness in applications.
//async function always returns a promise, even if you don't explicitly return one.


const p = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("promise resolved");
    }, 10000)
})
const p2 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("promise2 resolved");
    }, 20000)
})

// async function getData(){
//     return p;
// }
// const dataPromise = getData();
// dataPromise.then(data => {
//     console.log(data); // "hello"
// }).catch(err => {
//     console.error(err);
// });


// async await
// async and await combo is used to handle promises


function handlePromiseWithoutAsync(){
    // Js engine will not wait for the promise to resolve, it will continue executing the code.
    p.then(data => console.log(data));
    console.log("This will execute before the promise resolves without using async/await");
}
// handlePromiseWithoutAsync()

// await is keyword can only be used in an async function
async function handlePromiseWithAsync(){
    console.log("inside handler function");
    // Js engine will wait for the promise to resolve before executing the next line of code.
    const val = await p;
    console.log("First promise resolves using async/await");
    console.log(val);

    // if we another await for same promise, it will not wait for the promise to resolve again, it will just return the resolved value.
    // const val2 = await p;
    // console.log("This will execute after the promise resolves again using async/await");
    // console.log(val2);

    //if we another await for different promise, it will wait for the new promise to resolve.
    const val2 = await p2;
    console.log("second promise resolves using async/await");
    console.log(val2);
}
handlePromiseWithAsync();


// Real world example of async/await with error handling


const GITHUB_API = "https://api.github.com/users/thismza";
// real world example
async function fetchGithubData(){
    // fetch is a built-in function in JavaScript that returns a promise.It gives a response object that contains the data from the API.
    try {
        const data = await fetch(GITHUB_API);
        const jsonValue = await data.json();

        console.log(jsonValue);
    }catch (err){
        console.error("Error fetching data from GitHub API:", err);
        // handle error
    }
}
fetchGithubData();


// async/await vs promise.then/.catch
// async/await is syntactic sugar over promises, making the code more readable and easier to understand.
// behind the scenes js is running the same then catch on its own.

