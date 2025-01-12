let person1 = {
  name: "pratik",
  lastname: "Majrikar",
  age: 25,
  // 3
  sayHello: function () {
    // if we are calling the same object inside that object then we can refernece it by this keyword
    console.log(
      "hello ! I am " +
        this.name +
        " having the  " +
        Car.brand + " " + 
        Car.model
    );
  },
};

let Car = {
  brand: "VW",
  model: "virtus",
};

person1.sayHello();
