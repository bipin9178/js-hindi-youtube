let myDate= new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toDateString());

// console.log(typeof myDate);

//let createNewDate = new Date(2023,0,23)
// let createNewDate = new Date(2023,0,23,5,3)
let createNewDate = new Date("1/14/2023")
// console.log(createNewDate.toLocaleString());

let StepTime=Date.now()
// console.log(StepTime);
// console.log(createNewDate.getTime());
//console.log(Math.floor(Date.now()/1000));

let newDate= new Date()
// console.log(newDate);
// console.log(newDate.getDay());
// console.log(newDate.getMonth()+1);


newDate.toLocaleString('default'
    ,{
weekday:"long",
}
);
