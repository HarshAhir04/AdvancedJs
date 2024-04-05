//string in javascipt
const name = "harsh";
const count = 100;

console.log(name + count + "hello");
console.log(`hello ${name} and count is ${count}`);

//second way to declare a string in the javascript
const str = new String("AdvancedJs");
console.log(str);

console.log(typeof str);
console.log(str[0]);
console.log(str.__proto__);

console.log(str.length);

//string methods
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.charAt(1));
console.log(str.indexOf("J"));

//important string method
const str2 = str.substring(0, 4);
console.log(str2);

const str3 = str.slice(0, 4);
console.log(str3);  

//string split method
const str4="   harsh    ";
console.log(str4);
console.log(str4.trim());

//replace and include methods in javadcript string
const url="https://www.google.com";
console.log(url);
console.log(url.replace("google","facebook"));
console.log(url.includes("google"));
console.log(url.includes("facebook"));

//convert the string in to the array to with reference
const str5="ab cd ef jk lm no";
console.log(str5.split(" "));