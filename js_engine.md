# Javascript Runtime Environment
### ===========================================
* Javascript runtime environment is a platform that allows you to run JavaScript code outside a web browser. It provides the necessary tools and libraries to execute JavaScript code on the server side or in other environments.
* JS runtime environment contains all elements required to run JS.
* It contains JS engine, set of API's, callback queue, microtask queue, event loop.
* The most popular JavaScript runtime environment is Node.js, which is built on the V8 JavaScript engine developed by Google. Node.js allows developers to build scalable and high-performance applications using JavaScript.

## Key Features of JavaScript Runtime Environment:

1. **Event Loop**: The event loop is a core feature of JavaScript runtime environments that allows non-blocking I/O operations. It enables asynchronous programming by handling events and callbacks efficiently.
2. **Single-threaded**: JS runtime environments are typically single-threaded, meaning they execute code in a single thread. However, they can handle multiple concurrent operations using the event loop and callbacks.
3. **APIs and Libraries**: JS runtime environments provide a rich set of APIs and libraries that allow developers to interact with the file system, network, databases, and other system resources.
4. **Modules**: JS runtime environments support modules, allowing developers to organize their code into reusable components. This promotes better code organization and maintainability.
5. **Package Management**: Most JS runtime environments come with a package manager (like npm for Node.js) that allows developers to easily install, manage, and share libraries and dependencies.
6. **Cross-platform**: JS runtime environments are designed to be cross-platform, meaning you can run JavaScript code on different operating systems without modification.
7. **Debugging and Profiling Tools**: JS runtime environments often provide debugging and profiling tools to help developers identify and fix issues in their code, optimize performance, and analyze memory usage.
8. **Security**: JS runtime environments implement security measures to protect against common vulnerabilities, such as code injection and cross-site scripting (XSS) attacks.

#### =========================
* JS Engine is the heart of the JavaScript runtime environment. It is responsible for interpreting and executing JavaScript code. The JS engine takes the source code, compiles it into machine code, and executes it.

`Code → Parsing → Compilation → Execution
`
Code is broken down in tokens
**Syntax Parser** converts code into an abstract syntax tree (AST).
AST looks something like this and code like this:

```JavaScript
let x = 10; 

```

```AST
{
  type: 'Program',
  body: [
    {
      type: 'VariableDeclaration',
      declarations: [
        {
          type: 'VariableDeclarator',
          id: { type: 'Identifier', name: 'x' },
          init: { type: 'Literal', value: 10 }
        }
      ],
      kind: 'let'
    }
  ]
}
```
Check https://astexplorer.net/ for more details on AST.

**Interpreter**
Takes code and run it line by line. Code is fast because it does not need to be compiled first.

**Compiler**
Whole code is compiled into an optimized version of code, and then it is executed.


**Just in time compilation (JIT)** is used to convert the AST into machine code that can be executed by the computer. This process optimizes the code for performance.

JS can act like an interpreter or compiler depending on the engine and the optimization techniques used.
JIT used both interpreter and compiler techniques to optimize the code for performance.
Modern JS engine follows JIT compilation, it interprets while it optimises code as much as it can.

**Ahead of time compilation (AOT)** is used to compile the code before it is executed, which can improve performance in some cases.

In the execution step of js engine(last step), there are two parts:
1. **Memory/Heap** 
   - This is where all variables and functions are stored as key-value pairs.
   - It allows for dynamic memory allocation and deallocation.
   - Garbage collector is responsible for cleaning up unused memory.(Uses Mark and Sweep algorithm)
   - 
2. **Call Stack**

