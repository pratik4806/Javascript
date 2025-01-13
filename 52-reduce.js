let myNums = [1, 2, 3, 4, 5];

let total = myNums.reduce((accumulator, CurrentValue) => {
  console.log(`${accumulator} and ${CurrentValue}`);
  return accumulator + CurrentValue;
}, 4);

console.log(total);

const mytotal = myNums.reduce((acc, curr) => {
  return acc + curr;
}, 8);
console.log(mytotal);

const shoppingCart = [
  {
    itemName: "JS course",
    price: 599,
  },
  {
    itemName: "python course",
    price: 999,
  },
  {
    itemName: "Devops Course",
    price: 12999,
  },
  {
    itemName: "Data Analytics",
    price: 14999,
  },
  {
    itemName: "Data Science course",
    price: 19999,
  },
];

let pricetopay = shoppingCart.reduce((acc, item) => {
  return acc + item.price;
}, 0);

console.log(pricetopay);
