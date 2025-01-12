let person = {
    // this is not recommended by putting the space between the objectname
    // "first name":"pratik",
    name:"pratik",
    lastname:"Majrikar",
    age:25
}

//creating the object with new keyword
// var person = new Object();

// we can modify the object as well and it will take that value
person.lastname = "johnson"
console.log(person.lastname)
console.log(person["name"])

// we can create the empty object as well. and later we can define the properties.
let emptyObject = {}

// in operator - it check if the particular object property is actually persent or not
console.log('age' in person)

for (let key in person) {
    console.log(key + " :  " + person[key])
}

