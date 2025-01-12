function sas() {
  console.log("this is a function");
}

// sas()

function table(num) {
  for (let i = 1; i <= 10; i++) {
    document.write(`${num} * ${i} = ${num * i} `);
    document.write("<br>");
  }
  document.write("<br>");
}

table(96);
table(39);
table(32);
table(13);

alert("hi there");

// Argumentobject()

function add() {
  if (arguments.length == 0) {
    console.log("no argumnets passed");
  } else {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }
    console.log(sum);
  }
}
let additon = add;
additon(32, 64);
add(12, 44, 76);
add(12, 44, 76, 23);

let ekdk = 23; //global variable
function add(a, b) {
  // here f is a local variable the scope of which is within the block itself. there by which it gets deleted from the RAM.
  let f = a + b;
  return f;
}
console.log(add(4, 6));

// anonyms function

// function expression
let a11 = function aanonym() {
  console.log("anonyms function");
};

a11();

// timeout
function show() {
  console.log("executed after 3 second");
}


setTimeout(function show() {
  console.log("executed after 3 second");
}, 3000);


// immediately invoked function - it is very effective during the memory management, as this function will executes as needed by not taking space during execution. it will take space when needed.
(function (params) {
  console.log("hello world");
  alert("hello world");
})();


let msg = " this is a welcome message";
function greet() {
  console.log(msg);
}
greet();
