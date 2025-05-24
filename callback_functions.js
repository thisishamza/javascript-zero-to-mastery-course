// What is a callback function?
// A callback function is a function passed as an argument to another function.

setTimeout(function(){
    console.log("this is a callback function in setTimeout");
}, 5000);

function x(y){
    console.log("this is function x");
    y();
}
x(function y(){
    console.log("this is callback function y");
});

// Javascript is a synchronous and single-threaded language. This means that it can only do one thing at a time.
// However, it can handle asynchronous operations using callbacks, promises, and async/await.
// This means that it can perform non-blocking operations, such as making network requests or reading files,
// without blocking the main thread.


// power of callback functions
// callback functions are used in many places in javascript
// such as in event listeners, setTimeout, setInterval, and many other functions.
// they are used to handle asynchronous operations and to make the code more readable and maintainable.
// they are also used to pass functions as arguments to other functions.


// deep about event listeners
// event listeners are functions that are called when a specific event occurs.
// they are used to handle user interactions with the web page, such as clicks, key presses, and mouse movements.
// event listeners are added to elements using the addEventListener method.
// they can be removed using the removeEventListener method.
// event listeners can be used to handle multiple events on the same element.
// they can also be used to handle events on multiple elements.
// event listeners can be used to handle events on the document and window objects.
// they can also be used to handle events on custom elements.


// event listeners can be used to handle events.


// document.getElementById("btn").addEventListener("click", function(){
//     console.log("this is a callback function in event listener for button click");
// });


// closures demo with event listeners
function attachEventListener(){
    var x = 0;
    document.getElementById("btn").addEventListener("click", function xyz(){
        console.log("Button clicked", ++x);
    });
}
attachEventListener()

// scope demo with event listeners


// garbage collection & removeEventListeners
// garbage collection is the process of automatically freeing up memory that is no longer being used by the program.
// Event listeners are heavy and can cause memory leaks if not removed properly so they need to be removed when
// they are no longer needed.
// garbage collection is done by the javascript engine automatically.
// however, it is important to remove event listeners when they are no longer needed to prevent memory leaks.
// this can be done using the removeEventListener method.
// the removeEventListener method removes the event listener from the element.
// it takes the same arguments as the addEventListener method.








