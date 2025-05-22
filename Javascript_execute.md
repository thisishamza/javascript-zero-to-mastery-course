1. Compile code 
    1. Tokenizing / Lexing (Code is broken into small chunks called token)
    2. Parsing 
    3. Code generation (executable code)

2. Code Execution


According to ECMAScript
1. Early error checking
2. Determining Scope of all variables

**JavaScript is a synchronous single-threaded language.**

**Everything in JavaScript happens in the execution context**

Execution context contains two components
1.  Memory OR Variable environment
    All variables and functions are stored as key value pairs in a variable environment
2. Code OR Thread of execution
    Code is executed line by line in the order it is written

Function run different in js unlike other languages.
Each function has its own execution context
Call stack manages the execution context
