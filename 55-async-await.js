// async-await
// this function always returns the promise
// we can always make a normal function async.
// await pauses the execution of its surrounding async function until the promise is settled.

async function hello() {
  console.log("hello");
}

hello(); // it will always return the promise object.

// async await
function api(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("weather data", data);
      resolve(200);
    }, 5000);
  });
}
async function getWeatherData() {
  await api(12);
  await api(24);
  await api(36);
}
