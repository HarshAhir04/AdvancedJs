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

