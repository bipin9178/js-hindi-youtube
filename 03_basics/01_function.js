// function myfun(){

// console.log("B");
// console.log("I");
// console.log("P");
// console.log("I");
// console.log("N");
// }

//myfun()

// function addTwoNumber(number1,number2)
// {
//     console.log(number1+number2)
// }

// function addTwoNumber(number1,number2)
// {
//     // let result =number1+number2;
//     // return result
//     // console.log(number1+number2)
//     return number1+number2;
// }

//  const result=addTwoNumber(3,5);
//  console.log("result:-",result);

function loginUserMessage(username= "sam")
{
    if (!username) {
        console.log("Please enter Username");
        return
    }
 return`${username} just loggin In`
}

//console.log(loginUserMessage("bipin"));
console.log(loginUserMessage("Hitesh"));


 
