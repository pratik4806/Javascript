let arr1 = ["Maths", "Science", "English", "History"];
let arr2 = new Array("Maths", "Science", "English", "History");

console.log(arr1, arr2);

// add to the last
arr1.push("Hindi");

// add to the first
arr1.unshift("Hindi");
console.log(arr1);

// delete from end
arr1.pop();

// delete from start
arr1.unshift();
console.log(arr1);

// remove from pos
// index, how many element
arr1.splice(1, 2);
console.log(arr1);

// empty an array
// arr2 = []
// console.log(arr2)

let pos = arr1.indexOf("English");
console.log(pos);

// check if array or not
console.log(Array.isArray(pos));

// convert to array
let sentence = "this is is sample sentence";
let wordArray = sentence.split(" ");
let splitbyS = sentence.split("s");
console.log(wordArray);
console.log(splitbyS);

// join - works only with array
let joinedarray = arr1.join("-");
console.log(joinedarray);

// merge two array
let arr3 = ["Urdu", "Tamil", "Kannada"];
let newArr = arr1.concat(arr2, arr3);
console.log(newArr);

// multidimentional array
let arr4 = [
  ["Maths", 293],
  ["science", 239],
  ["English", 300],
  ["history", 939],
];

console.log(arr4)

arr4.forEach(element => {
        console.log(element)
});
