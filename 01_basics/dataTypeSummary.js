//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)  always give typeof as object , object function in case of function*

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3


/************************************ Memory : Stack & heap *****************************************/
// premitive datatypes : Stored in stack, 
// Non-premitive datatypes : Stores in heap.

let myUsername = "saanm2303"

let newUserName = myUsername
newUserName = "coolsaan"

console.log(myUsername);
console.log(newUserName);   // example of stack


let userOne = {
    email : "sanm2303.10@gmail.com",
    upi : "san@ybl"
}

let userTwo = userOne 
userTwo.email = "coolsan@gmail.com"

console.log(userOne.email);
console.log(userOne.email);

