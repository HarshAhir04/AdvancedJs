let mydate = new Date();
console.log(mydate);

console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toTimeString());
console.log(mydate.toLocaleString());
console.log(mydate.toLocaleDateString());
console.log(mydate.toLocaleTimeString());
console.log(mydate.getFullYear());
console.log(mydate.getMonth());
console.log(mydate.getDate());
console.log(mydate.getDay());
console.log(mydate.getHours());
console.log(mydate.getMinutes());
console.log(mydate.getSeconds());
console.log(mydate.getMilliseconds());
console.log(mydate.getTime());

console.log(typeof mydate);

let created_date = new Date(2023, 0, 23);
console.log(created_date.toDateString());

let created_date2 = new Date(2023, 0, 23, 11, 20, 30, 0);
console.log(created_date2.toLocaleString());

let created_date3 = new Date("04-09-2023");
console.log(created_date3.toLocaleString());

//timestamp
let created_date4 = Date.now();
console.log(created_date4);

console.log(typeof created_date4);
// console.log(created_date4.getTime());
console.log(Math.floor(Date.now() / 1000));

//Another date methods to be useds
let newdate = new Date();
console.log(newdate);

//important method
console.log(newdate.toLocaleString("default", {
    timeZone: "Asia/Kolkata",
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
}));

let new_date = new Date(11-2-2023);
console.log(new_date);

console.log(new_date.toDateString());
console.log(new_date.toLocaleDateString());
console.log(new_date.getFullYear());
// console.log(new_date.getUTCSeconds);

// function getFullMonthName(date) {
//     // Use toLocaleString with options for month format
//     const fullMonth = date.toLocaleString('default', { month: 'long' });
//     return fullMonth;
//   }

//   // Example usage
//   const today = new Date();
//   const fullMonth = getFullMonthName(today);

//   console.log(fullMonth);

function getFullMonthName(date) {
    // Use toLocaleString with options for month format
    const fullMonth = date.toLocaleString('default', { month: 'long' });
    return fullMonth;
}
const today = new Date();
const fullMonth = getFullMonthName(today);

console.log(fullMonth);

