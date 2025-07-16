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
//console.log(loginUserMessage("Hitesh"));

function  cardPrice(val1,val2,...num1)
{
    return num1

}
// console.log(cardPrice(200,300,400,2000));

const user=
{
    username:"bipin",
    price:"199"
}

function handelObject (AnyObject){
    console.log(`username is ${AnyObject.username} and price is ${AnyObject.price}`);
    
}
handelObject(user)

const myarry= [100,200,300,400];
 
function returnSecondValue(getArry)
{
    return getArry[1];
}
console.log(returnSecondValue([200,100,400,1000]));

 
