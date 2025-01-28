const colors = ["red", "blue", "black", "yellow", "green", "white"];

// ways to print the array elements
// let co1 = colors[0];
// let co2 = colors[1];
// let co3 = colors[2];
// let co4 = colors[3];

// array destructuring
const [color1, color2, color3, color4, color5, color6] = colors;

const [, , c3] = colors;

const { 3: colors4 } = colors;

function print([a, b, , d]) {
  console.log(a, b, d);
}
print(colors);

const user = {
  name: "Pratik",
  age: 25,
  address: {
    city: "Nagpur",
    state: "Maharashtra",
  },
};

// way to print the individual key value pair.
// const name = user.name;
// const age = user.age;

// object Destructuring
const { name, age } = user;

// alternately give user defined varaible to key
const { name: userName, age: userAge } = user;

const {
  address: { city: userCity, state: userState },
} = user;

// multilevel destructuring
const { city } = user.address;

function info({ age }) {
  console.log(age);
}
info(user);
function info1({ name }) {
  console.log(name);
}
info1(user);
function info2({ city }, { state }) {
  console.log(city, state);
}
info2(user.address, user.address);

let arr = [32, 76, 34, 76, 33, 76, 23, 87, 33];
const [a, b] = arr;

// rest operator
const [a1, , , , ...rest] = arr; //rest will allocated with the values  33, 76, 23, 87, 33

// spread operator - expand an iterable objects (arrays, strings, objects) into single elememt.
let arr1 = [3, 7, 3];
let obj = { ...arr1 };

console.log(obj);

function add(a, b, c) {
  return a + b + c;
}
console.log(add(...arr1));

let obj2 = {
  name: "XYZ",
  company: "ABC",
  address: "FFF",
};

console.log({...obj2,  name: "Prateek", company: "TTT" }); //it will overwrite the name and company at runtime
console.log({  name: "Prateek", company: "TTT",...obj2 }); //it will not overwrite the name and company at runtime

