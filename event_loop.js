// 1. Browser has superpowers that are lent to JS engine to execute some tasks, these superpowers include web API's such as console, location, DOM API, setTimeout, fetch, local storage.
// 2. Callback functions and event handers are first stored in Web API environment and then transferred to callback queue.
// 3. Promises and mutation observer are stored in API environment and then transferred to microtask queue.
// 4. Event loop continuously observes call stack and when it is empty it transfers task to call stack.
// 5. Micro task is given priority over callback tasks.
// 6. Too many micro tasks generated can cause Starvation (nit giving time to callback tasks to execute).
//callbback queue is used to store callback functions and event handlers.
// 7. Micro task queue is used to store promises and mutation observer.
// 8. Event loop is used to transfer tasks from callback queue and micro task queue to call stack.
// 9. Event loop is a single thread and it can only execute one task at a time.
// 10. Event loop is a part of the JavaScript engine and it is responsible for executing the code.
// 11. Event loop is a continuous loop that checks the call stack and the callback queue.
// starvation is a situation where the callback queue is not given time to execute because of too many micro tasks in the micro task queue.


