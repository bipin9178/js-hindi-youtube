// Immediately Invoked Function Expressions(IIFE)

(function chai() {
    console.log(`DB Connect`);
   
})();

(   (name)=> {
    console.log(`DB Conneded Two ${name}`);
    
})('bipin')