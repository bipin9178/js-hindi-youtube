//  var c=300
let a=300
if (true) {

    let  a=10
const b=20
var c= 30
//console.log("Inner",a);

}

function one ()
{
    const username="bipin";

    function two() {
        const website="youtube";
        //console.log(username);
        
    }
    //console.log(website);
 two()   
}
one()
//console.log(a);
//console.log(b);
// console.log(c);



if (true) {
    const username= "bipin"
    if (username=== "bipin") {
        const website ="youtube"
        
        //console.log(username +website);
        
    }
   // console.log(website);
    
    
}
//console.log(username);



//*******************interesting*******************
console.log(addOne(5));

function addOne(num)
{
return num+1;
}
//console.log(addOne(5));
//addTwo(5)
const addTwo = function(num){
    return num+2
}