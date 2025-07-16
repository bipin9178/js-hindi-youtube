const arr =[1,2,3,4,5]
for (const num of arr) 
    {
        console.log(num);
           
}
const greetings="hello World!"
for (const greet of  greetings) 
    {
        console.log(` each in of ${greet}`);
           
}
const map =new Map()
map.set("IN","India");
map.set("FR","frances");
map.set("IN","India");
console.log(map);

for (const [key,value] of map) {
    console.log(key,':-',value);
    
    
}