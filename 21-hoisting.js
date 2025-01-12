'use strict'

// Hoisting in JavaScript is a built-in behavior that moves the declarations of functions, variables, and classes to the top of their scope before the code is executed: 
// This allows developers to use these declarations before they are actually declared in the code. Hoisting can help to: avoid errors related to undeclared variables and make code more readable and maintainable.
console.log(hello());

function hello(){
    return 'hello'
}


x = 90 // initialization
console.log(x)
var x; //declaration 
// here the declaration after printing the value of the x. hoisting read all the declaration first be it variable declaration, function declaration or any other declaration.


// in hoisting the javascript compiler will check all the declaration first and moves it to the top of the current js file. thereby read all the declaration. same with functions also the inpterpreter reads all the function level declaration and moves it to the first line of the function declaration not to the top of the page.

// in case of the let the interpreter gives the x is not initialized. and same in case of  const.

// if you forgot to declare the variable it will self initialized the variable
f=332;
console.log(f)
// to overcome this problem this we use the strict mode at the top of the page.






