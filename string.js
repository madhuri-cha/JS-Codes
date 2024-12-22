/*
let str = "hii"
    // it has some inbulit propertities 
    // string length
console.log(str.length)
    // Template Literals

let obj = {
    item: "pen",
    price: 10,
};
let output = `the cost of ${obj.item}`;

console.log(obj.item);

console.log(output);    
    
let specialString = `This is template literal`;
console.log(typeof specialString)

let array = ["India", "is", "the", "best"];

let message1 = array.join("");
console.log(message1);

let message3 = array.join(" ");
console.log(message3);
//Output : India is the best

let message2 = array.join();
console.log(message2);

//Output : India,is,the,best

let message14 = array.join(" i ");
console.log(message14);


let message = "Once upon a time";

let splittedArray = message.split(" ");

console.log(splittedArray);

let splittedArray1 = message.split("n");

console.log(splittedArray1);
/*
Output
[ 'Once', 'upon', 'a', 'time' ]

let isSleeping = true;

let isRunning = false;

if(isSleeping){
    console.log("He is sleeping");
    
}else{
    console.log("He is Running");
}
if(!isSleeping){
    console.log("He is sleeping");
   
}else{
    console.log("He is Running");
     isSleeping = false;
}

if(!isSleeping){
    console.log("He is sleeping");
}else{
    console.log("He is Running");
}
/*
Output : He is sleeping




let x = 10;
let y = 16;

let isGreater = x > y;
console.log(isGreater);    // False
let range = null;

console.log(range);         // null
console.log(typeof(range));    //object
let person = {
    name: "Mayank",
    age: 21,
    country: "India"
};

// Adding a property
person.isSleeping = false;

// Modifying a property
person.age = 22;

// Deleting a property
delete person.country;

console.log(person);

// Output : { name: 'Mayank', age: 22, isSleeping: false }
let person = {
    name: "Mayank",
    age: 21,
    country : "India",
    message: function() {
        console.log("Hello, my name is " + this.name);
    }
};

person.message(); 

// Output: Hello, my name is John
let fruits = ["Apple", "Banana", "Orange"];

fruits.push("Kiwi");

fruits.unshift("Grapes");

console.log(fruits);

// Output : [ 'Grapes', 'Apple', 'Banana', 'Orange', 'Kiwi' ]
let fruits = ["Apple", "Banana", "Orange"];

fruits.pop();

fruits.shift();

console.log(fruits);
*/
// Output : [ 'Banana' ]
const fruits = ['apple', 'orange'];

// Inserting 'banana' at index 1
fruits.splice(-8, 0, 'banana');
console.log(fruits); // Output: ['apple', 'banana', 'orange']