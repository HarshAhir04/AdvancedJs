//all about the object in the javascript to how to create a object and how to access the object
//in the javascript we create a object using two way 1) it is using the object literal 2) it is using the object constructor
//1) object literal
const user = {
    name: "harsh",
    age: 21,
    address: "velapur",
    friends: ["harsh", "kunal", "karan"],
};
console.log(user);

//2) object constructor
Object.create(user2 = { name: "Shubham", age: 21, address: "unn", friends: ["harsh", "kunal", "karan"], });
console.log(user2);

//using singleton method to use in the constructor method 
const user3 = new Object();

user3.name = "bhumit";
user3.age = 21;
user3.address = "velapur";
user3.friends = ["karan", "kunal", "harsh"];
console.log(user3);

//interview question get the value of the object 
const obj1={
    username:"harsh",
    password:123,
    connected:true
};
console.log(obj1.username);
console.log(obj1["username"]);

//interview question based on the get the symbol element from the object 
const symbol1 = Symbol("hello Js");
const symbol2 = Symbol("hello React");
const obj2 = {
    [symbol1]: "hello",
    [symbol2]: "world"
};
console.log(obj2[symbol1]);
console.log(typeof obj2.symbol1);
console.log(typeof obj2[symbol1]);
console.log(obj2);

//merge the object from one object from the another object using 
//1) spread operator
//2) Object.assign

const person = {
    firtname:"harsh",
    lastname:"kumar",
    greet: function(){
        console.log("hello here i am");
    }
};
person.greet();
console.log(person.greet);
console.log(person.greet());
