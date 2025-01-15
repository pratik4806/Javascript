// FETCH API
// it provides an interface for fetching (sending/receiving) resources
// it uses the  request and response object
// the fetch() method is used to fetch the resource(data)

// syntax
// let promise = fetch('URL', [options]);
// fetch returns the promise.

// An API endpoint is a digital location where an API receives requests for resources on its server. It's also known as a uniform resource locator (URL)

let URL = "https://cat-fact.herokuapp.com/facts"; // get request

const para = document.querySelector("#fact");
const b = document.querySelector("#btn");


// using async await
const getFacts = async () => {
  console.log("fetching....");
  let response = await fetch(URL);
  console.log(response); //json format
  let data = await response.json(); //javascript object format.
  console.log(data);
  para.innerText = data[4].text;
};  

// using promise chain
// function getFacts(){
//     fetch(URL).then((Response) =>{
//         return Response.json();
//     }).then((data) =>{
//         console.log(data)
//         para.innerText = data[4].text;
//     })
// }

b.addEventListener('click', getFacts)


// when we make a call to an api endpoint, we get the response back, in that case our webpage doesnot reload. it will update in runtime.

// understanding the terms
// 1. AJAX = asynchronous javascript
// 2. JSON = Javascript object Notation
// 3. json() method = returns the second promise that resolves with the result of the parsing the response body text as JSON (converts the JSON into javascript object ==> input is JSON and output is Javascript Object)

// https://developer.mozilla.org/en-US/docs/Web/HTTP/Status


