let person = {
  name: "pratik",
  lastname: "Majrikar",
  age: 25,
  // 3
  sayHello: function () {
    console.log("hello");
  },

  // 4 - it was introduce in ES6
  sayHi(){
    console.log("hi there")
  }
};
person.sayHello();
person.sayHi();

// we can create method by  4 ways
// 1
// person.sayHello = function (){
//     console.log("hello")
// }
// calling the function
// person.sayHello();

// 2.
// function greet(){
//     console.log("hello")
// }

// person.sayHello = greet();


