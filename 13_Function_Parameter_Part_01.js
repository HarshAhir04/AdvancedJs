//function and its parameter in the javascript
const name="harsh";
function sayMayName(name) {
    console.log("hello " + name);
};
sayMayName("harsh");

function add(num1, num2) {
    console.log(num1 + num2);
};
add(1, 2);

function mul(num1, num2) {
    console.log(num1 * num2);
};
const result = mul(1, 2);
console.log(`result is ${result}`); //console.log(result);

function sub(num1, num2) {
    // let result = num1 - num2;
    // return result;
    // console.log("hello");
    return num1 - num2;
};
sub(9, 2);
console.log(`result is ${sub(9, 2)}`);

//how many types to take a parameter and arguments in the javascript 
function LoginUser(username){
    //if(!username){
    //     console.log("please provide username");
    //     return
    // }
    if(username === undefined){
        console.log("please provide username");
        return 
    }
    return `${username} loged in successfully`;
};

console.log(LoginUser("harsh"));
console.log(LoginUser(""));
console.log(LoginUser());
