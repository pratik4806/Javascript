// to over come this problem of callback hell we have a solution to this called as promises.
// promise is an object in javascript.
// promise is for "eventual" completion of task.

// syntax
// let promise = new Promise((resolve, reject) => {...})

// resolve and reject are the 2 callback handlers provided by the javascript.

// example
// let say you are ordering the item from the amazon, after you placed the order, there are 2 possibilities either the order will be delivered or it will canceled by you or the partner will reject the order.

// in such cases,
//  if the order placed delivered successfully, then promise is fulfilled, called as resolve
//  if the order placed rejected or canceled,then promise is unfulfilled, called as reject

let promise1 = new Promise((resolve, reject) => {
  console.log("I am a promise");
  // after this resolved state is fulfilled from last pending. and promiseReslult will be the resolved message inside/ or it can be anything that you want to return.
  // resolve("order delivered successfully...")
  reject("error occured");
});

// this promise object 3 state.
// 1. prototype object

// 2. promise state
// promise has three state
// a. pending - ex. if you cancel the order from amazon, and waiting for the confirmation, whether the order cancled is acknowledge by amazon or not, it will be in the pennding state.
// b. fulfilled - resolved state - order delivered successfully
// c. reject - reject state - you canceled the order and money refund in your account. order rejected successfully.

// 3. promiseResult

// example

function getData(dataID, getNextData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // console.log("data - ", dataID);
      // resolve("success..")
      reject('error')
      if (getNextData) {
        getNextData();
      }
    }, 5000);
  });
}
// this will return the promise in the getData function after 2000ms

// pending = the result is undefined
// resolve = the result is a value(fulfilled)  -> resolve(result)
// rejected = the result is an error object    -> reject(error)

// after promise fulfill we we have to implement promise.then((res) => {...} method to return the additional information.
const getPromise = () => {
  return new Promise((resolve, reject) => {
    console.log("I am a Promise");
    // resolve('success') // stored in res.
    reject("error in this"); // stored in err.
  });
};

let promise2 = getPromise();
promise
  .then((res) => {
    console.log("promise fulfilled -> ", res);
  })
  .catch((err) => {
    console.log("promise unfulfilled -> ", err);
  });

// after promise reject we we have to implement promise.catch((err) => {...} method to return the additional information.

function asyncFunction() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("some data here");
      resolve("success");
    }, 5000);
  });
}
function asyncFunction1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("some data here");
      resolve("success");
    }, 5000);
  });
}
function asyncFunction2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("some data here");
      resolve("success");
    }, 5000);
  });
}

// promise chanining.
console.log("fetching data 1");
asyncFunction1().then((res) => {
  console.log("fetching data 2");
  asyncFunction2().then((res) => {});
});
