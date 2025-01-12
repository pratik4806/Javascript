console.log(Math.floor(Math.random() * 11) + 1); // 1 to 10 numbers

// generate between a particular limit
                                    // upper limit - lower limit +  the number above which the you want to generate the number
                                    // upper limit number is not included here the lower limit is included 
let a = Math.floor(Math.random() * (25 - 15)) + 15;
console.log(a);


function generate(max, min){
    let a = Math.floor(Math.random() * (max - (min +1))) + min;
    return a
}
console.log(generate(50,20))


