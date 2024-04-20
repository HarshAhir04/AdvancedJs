//IIFE immediately invoked function expression
(function(){
    console.log("hello ReatJS");
})();


//; must requre to and the IIFE must be calle
//IIFE in the arrow function 
(() => {
    console.log("hello ReatJS");
})();

//IIFE in the class
class IIFE{
    constructor(){
        console.log("hello ReatJS");
    }
};

//how to enter the parameter in the IIFE
(function(name){
    console.log(`hello ${name}`);
})("ReatJS");

((name)=>{
    console.log(`hello ${name}`);
})("NextJS");