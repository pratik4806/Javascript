// let person = {
//     name:"PRatik",
//     age:22
// };

var person = new Object();
person.name = "Pratik";
person.age = 32;

console.log(person);


// getters and setters
let people = {
  name: "Pratik",
  age: 22,
  get getName(){
      return this.name.toUpperCase()
  },
  set setName(n) {
    this.name = n.toUpperCase();
  },
};
console.log(people.getName);
people.setName = "Sameer"
console.log(people);
