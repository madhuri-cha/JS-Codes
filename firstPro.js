console.log("LEVEL1");
x = 35;
console.log(x);
y = null;
z = undefined;
console.log(y);
console.log(z);
fullname = "king";
console.log(fullname);
price = 38;
console.log(price);
/*
variables are start only with _ $ and character
 A and a are not equal
 reserved word are not variables
 space are not allow
 only letters , digits, underscore and $ are allowed
 camel case = Full Name
 pascal case =
 kabbab case =
*/
/* we can start variables with let, const, var 
x1 = 2;
y1 = 2;
result: x1 + y1;
console.log(result);
*/
const student = {
    fullname: "chavan",
    age: 20,
    cgpa: 8.14,

};
console.log(student);
const product = {
    fullname: "Ball pen",
    offer: 5,
    rating: 4,
    isDealToday: true,
    Price: 270,
};
console.log(product);
console.log(student.age);
console.log(product["rating"]);
const profile = {
    username: "Madhuri Chavan",
    followers: 340,
    following: 567,
    isfollow: false,
};
console.log(profile);
console.log(typeof isfollow);
console.log(typeof followers);

//comments = not excuting part in code