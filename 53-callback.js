// async await >> promsie chains >> callback hell

// sync in Javascript
// synchronous
// synchronous means the code runs in a particular sequence of instructions given in the program.
// each instruction waits for the previous instruction to complete its execution

// Asynchronous
// due to synchronous programming, sometimes the important instructions gets blocked due to some previous instructions, which cause delay in the UI.asynchronous code execution allows to execute next instructions immediately and doesnot block the flow.

// asynchronous javascript statement

console.log("one");
console.log("two");
setTimeout(() => {
  console.log("three");
}, 4000);
setTimeout(() => {
  console.log("four");
}, 2000);

// all these statements would execute one after another asynchronously called as asynchronous javascript.

// now using the set timeout method we can implement the  asynchronous programming
// the code with execute parallely without interfering the execution of each other.

// callback - a callback is an argument to another function.
function sum(a, b) {
  console.log(a + b);
}
function calculator(a, b, sum) {
  sum(a, b);
}
calculator(1, 4, sum);

// callback hell - nested callback stacked below one another forming a pyramid structure(pyramid of doom)
// this type of programming is difficult to understand manage

function getData(dataID) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("data - ", dataID);
      resolve(`Fetched data ${dataID}`);
    }, 5000);
  });
}

getData(1)
  .then((res) => {
    console.log('getting data 1', res);
    return getData(2);
  })
  .then((res) => {
    console.log('getting data 2', res);
    return getData(3);
  })
  .then((res) => {
    console.log('getting data 3', res);
    return getData(4)
  });


// callback hell
getData(1, () => {
  console.log("getting data 2");
  getData(2, () => {
    console.log("getting data 3");
    getData(3, () => {
      console.log("getting data 4");
      getData(4, () => {});
    });
  });
});

