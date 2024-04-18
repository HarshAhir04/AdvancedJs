//merge the object from one object from the another object using 
//1) spread operator
//2) Object.assign

const user1 = {
    a: "harsh",
    b: 123,
    c: true
};
const user2 = {
    username: "subham",
    password: 123,
    connected: true
};
const user3 = {
    user_name: "bhumit",
    password_01: 123,
    connected_02: true
};
const user4 = { user1, user2, user3 };
console.log(user4);

//using assign to merge the object
const user5 = Object.assign({}, user1, user2, user3);
console.log(user5);

//using the spread operator
const user6 = { ...user1, ...user2, ...user3 };
console.log(user6);

//get keys of objects
console.log(Object.keys(user5));

//get values of objects
console.log(Object.values(user5));

//get entries of objects
console.log(Object.entries(user5));

//get the length of the object
console.log(Object.keys(user5).length);

//object destructoring
const course = {
    coursename:"Advanced Javascript",
    price:"free",
    courseInstructor:"Chai Our Code"
};

const {courseInstructor} = course;
console.log(courseInstructor);

//give as name you choice 
const {courseInstructor:instructor} = course;
console.log(instructor);

// {
//     "coursename":"Advanced Javascript",
//     "price":"free",
//     "courseInstructor":"Chai Our Code"
// }

//json formate api