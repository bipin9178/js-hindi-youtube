// # Primitive

//  7 types : String ,Number , Boolearn , null, undefined , Symbol, BigInt

const score = 100  
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 3536546745243n


// Reference (Non Primitive)

// Array, Objects, Functions 

const heros=["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "bipin",
    age: 22,
}

const myFunction = function ()

{
    console.log("hello World");
    
}

console.log(typeof id);



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive),  Heap(Non-Primitive)

let myYoutubename= "bipinkanjariya.com";

let anothername = myYoutubename

anothername = "bipinaurcode"
console.log(myYoutubename);
console.log(anothername);


let userOne ={
    email :"user@google.com",
    upi: "user@ybl"
}
let userTwo= userOne

userTwo.email = "bipin@google.com"

console.log(userOne.email);
console.log(userTwo.email);

