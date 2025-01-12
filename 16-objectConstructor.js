// if we have to decalre the object of 100 student in that case the object constructor will be useful.

// var student1 = {
//   firstName: "Pratik",
//   lastname: "Majrikar",
//   age: 25,
//   class: 3,
// };

// var student2 = {
//   firstName: "Rohan",
//   lastname: "Majrikar",
//   age: 22,
//   class: 2,
// };

// declare the object constructor.

function Student(first, last, age, cls) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.class = cls;
  // this.nationality = 'Indian'
  // this.name = function(){
  //   return this.firstName + " " + this.lastName;
  // }
}

// calling the student object with constructor
var student1 = new Student("Pratik", "Majrikar", 22, 2);
var student2 = new Student("Sameer", "Alana", 22, 2);


// object prototype
// prototype is a super class of all the classes in the javascript. so if you want to modify the existing object property then you have to call the prototype object.

// In JavaScript, a prototype is a mechanism by which objects inherit properties and methods from one another. It's a fundamental concept in understanding how JavaScript's object-oriented system works.
Student.prototype.nationality = 'Indian'

//  this updation will not add into the Student but in constructor student1
// student1.nationality = "Indian"
Student.prototype.name = function(){
  return this.firstName + " " + this.lastName;
}


console.log(student1)
console.log(student2)
console.log(student2.name())





