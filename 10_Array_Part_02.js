//advanced array topics related to the javascript array
const marvel_heroes = ["thor", "ironman", "spiderman"];
const dc_heroes = ["batman", "superman", "wonderman"];

marvel_heroes.push(dc_heroes);
console.log(marvel_heroes);
console.log(marvel_heroes[3][1]);

//concat the array method this not change the original array
const indian_heroes = ["shaktiman", "bharat"];
console.log(dc_heroes.concat(indian_heroes));
console.log(dc_heroes);

//using spread operator merge the array
const all_heroes = [...dc_heroes, ...indian_heroes];
console.log(all_heroes);

//complex array method
const another_array = [1,2,[3,4],[5,6,7,[8,9,[10]]]];
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);

//web scriping array data 
console.log(Array.isArray("Hello"));
console.log(Array.from("Hello"));
console.log(Array.from({name:"Hello"})); //interesting questions we put the value which ever we convert array keys or a value from the object 

//covert the variables into the arry from dynamic data
let score1=90;
let score2=80;
let score3=100;
let score4=95;
console.log(Array.of(score1,score2,score3,score4));