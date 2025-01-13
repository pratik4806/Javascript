let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// map automatically returns the values
let m = nums.map((num) => {
  return num * 10;
});
console.log(m);

// chaning of the map and filter
let myNums = nums
  .map((nums) => nums * 8)
  .map((nums) => nums + 2)
  .filter((nums) => nums > 34);

console.log(myNums)