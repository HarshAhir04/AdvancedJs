//we have the two scope of javascript
//1) global scope
//2) local scope

//1) global scope
//the variable and function which is declare outside of the function is called global scope
var globalVar = "global variable";

function globalFunc() {
    var localVar = "local variable";
    console.log(localVar);
}

globalFunc();
console.log(globalVar)

//2) local scope
//the variable and function which is declare inside of the function is called local scope
function localFunc() {
    var localVar = "local variable";
    console.log(localVar);
}

localFunc();
// console.log(localVar)

let a = 10;
var b = 20;
const c = 30;

if(true){
    let a = 100;
    var b = 200;
    const c = 300;
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(a);
console.log(b);
console.log(c);