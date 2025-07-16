const user =
{
    username:"bipin",
    price:999,

    welcomeMessage:function()
    {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }
}
// user.welcomeMessage()
// user.username="sam";
// user.welcomeMessage()

//console.log(this);


// function chai() {
//     let username="bipin";
//     console.log(this.username);
    
// }

// const  chai =() => {
//    let username="bipin";
//     console.log(this);   
// }
// chai()

// const addTwo = (num1,num2)=>
//     {
//         return num1+num2;
// }
// console.log(3,4);

// const addTwo = (num1,num2) =>  (num1+num2)

// console.log(addTwo(3,4));
const addTwo = (num1,num2) =>  ({username:"bipin"})

console.log(addTwo(3,4));


// const myArray=[1,2,3,4,5]
//  myArray.forEach()