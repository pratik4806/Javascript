a = "prateek \\ Majrikar";
b = "prateek";
console.log(typeof a, typeof b);

//  template literal
let greet = `hi there, how are you ${a}`;
console.log(greet);

console.log(a.length);
console.log(a[2]);
console.log(a + " " + b);

// javascript is case sensitive p!= P
if("Prateek" == b){
    console.log("equal")
}else{
    console.log("not equal")    
}

// concat
console.log(a.concat( " ", b))

// substring
// from index , to index 
// 2(index) se leke 30(index) tak character
console.log(greet.substring(2,30))
 // from , to how many character
//  2 ke baad 30 character
console.log(greet.substr(2,30))

// indexof
console.log(a.lastIndexOf("e"))

let g1="       this is a javascripit tutorial for begineers     "
let g2=g1.trim()
let g3=g1.trimStart()
let g4=g1.trimEnd()
console.log(g1)
console.log(g2)
console.log(g2)
console.log(g4)

// include
console.log(g1.includes('For'))

