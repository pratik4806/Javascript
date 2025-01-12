// let a = new Date(2024, 11,21,16,54,24,722);
let a = new Date("December 24, 2024 11:45:12");
console.log(a.getTime());
console.log(a.getFullYear());
console.log(a.getUTCFullYear());
console.log(a.getMonth());
console.log(a.getDay());
console.log(a.getMinutes());
console.log(a.getDate());
console.log(a.getTimezoneOffset());

// get future date after 50 days
let b = new Date("December 24, 2024 11:45:12");
let futureDate = b.setDate(a.getDate() + 20);
console.log(a)
console.log(b)
console.log(futureDate);

// in javascript the jan is denotes as 0 and december as 11
