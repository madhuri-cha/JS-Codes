let strNum = "25";
console.log(typeof(strNum));           // string

let strFloat = "35.63";
console.log(typeof(strFloat));         // string

let parsedInteger = parseInt(strNum);
let parsedFloat = parseInt(strFloat);

console.log(typeof(parsedInteger));   // number
console.log(typeof(parsedFloat));     // number
let person1 = {
    name : "Mayank",
    age : "21",
    isRunning : true
}

let person2 = person1;

person2.name = "Aditya"

console.log(person1.name);    // Aditya

console.log(person2.name);   // Aditya