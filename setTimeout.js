console.log("start");

setTimeout(function cb(){
    console.log("callback function executed");
}, 5000);
console.log("end");

let startDate = new Date().getTime();
let endDate = startDate;
while(endDate < startDate + 10000) {
    endDate = new Date().getTime();
    // This will block the event loop and prevent the callback from executing
    // It is just to demonstrate that the callback won't execute until the loop is broken
}

console.log("after blocking the event loop while loop expired");