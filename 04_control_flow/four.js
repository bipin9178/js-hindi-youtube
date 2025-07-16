const myObject=["c++","c","java","javascript","Ruby"];
// myObject.forEach( function (val) {
//     console.log(val);
    
// })
myObject.forEach( (item)=>{
  //  console.log(item);
    
})
function PrintMe(item)
{
    //console.log(item);
    
}
myObject.forEach(PrintMe)

myObject.forEach((item,index,arr)=>
{
    //console.log(item,index,arr);
    
})

const ArrayObj=

    [
        {
            "langvage":"javasvript",
            "langvagefile":"js"
        },
        {
            "langvage":"java",
            "langvagefile":"java"
        },
        {
            "langvage":"python",
            "langvagefile":"py"
        },
         {
            "langvage":"c",
            "langvagefile":"c"
        }
    ]


    ArrayObj.forEach((item)=>{
        console.log(item.langvage);
        
    })