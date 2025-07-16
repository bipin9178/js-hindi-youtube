// const codeing=["c","c++","java","JavaScript","Python","Ruby"]

// const values=codeing.forEach((item)=>{

//    // console.log(item);
//     return item
    
// })
// console.log(values);


const MyNums =[1,2,3,4,5,6,7,8,9,10]

const NewNumbs=MyNums.filter((num) => num>4)
//console.log(NewNumbs);

const myCard=[
    {
        itemname:"book",
        price :200
    },
    {
        itemname:"java",
        price :2000
    },
    {
        itemname:"javascipt",
        price :4765
    },
    {
        itemname:"python",
        price :4533
    },
    {
        itemname:"c++",
        price :200
    }
]
const PriceToPay=myCard.reduce((acc,item)=>(acc+item.price),0)
console.log(PriceToPay);
