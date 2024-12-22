//functions
// block of code 
function savename(num1, num2)
{
    for(let i = 3; i < 10; i++ )
    {
        console.log(i)
    }
    console.log("sum", num1 + num2)
}
savename(3,5)
function savename(num1, num2)
{
    for(let i = 3; i < 10; i++ )
    {
        console.log(i)
    }
    sum = ("sum", num1 + num2)
    return sum;
}
console.log(savename(3,5))

function savename(num1, num2)
{
    for(let i = 3; i < 10; i++ )
    {
        console.log(i);
    }
    sum =  num1 + num2;
    return sum;
    // after return, code will not execute
}
let ans = savename(3,5)
console.log(ans)


// *****************************************
function savename(num1, num2)
{
    for(let i = 3; i < 10; i++ )
    {
        console.log(i);
    }
    sum =  num1 + " " + num2; // this is string not expression
    return sum;
    // after return, code will not execute
}
let ans1 = savename(3,5)
console.log(ans1)
// another method
let getMultiplication = function(a,b) // use const
{
    return a+b;

}
console.log(getMultiplication(2, 20))
const getMulti = function(a,b) // use const
{
    return a+b;

}
console.log(getMulti(2, 20))
//****************************/
// arrow function
let getMul = (a,b) =>// use const
{
    return a+b;

}
console.log("sum is", getMultiplication(2, 20))

console.log(x);
var x = 10;


function example() {
    var x = 10;
 
}

example();       // 10
console.log(x);       // Throws ReferenceError: x is not defined
const numbers = [-1, 0, -20, 45, 3, 74, -5, 6];

// Filtering positive numbers
const positiveNumbers = numbers.filter(function(number) {
  return number > 0;
});

console.log(positiveNumbers); // Output: [ 45, 3, 74, 6 ]
const words = ["apple", "banana", "orange", "grapefruit"];

const longWords = words.filter((words) => words.length > 6);

console.log(longWords); // Output: ["banana", "grapefruit"]

let personPrototype = {
    name : "Mayank"
};

let person = Object.create(personPrototype);

console.log(person);     // {}

person.firstName = "Mayank";
person.lastName = "Pandey";
person.age = 21;
person.hobbies = ["reading", "writing", "sleeping"];

console.log(person);

/* Output :
{
  firstName: 'Mayank',
  lastName: 'Pandey',
  age: 21,
  hobbies: [ 'reading', 'writing', 'sleeping' ]
}
*/

//arrow
function getexe(x,y)
{
    let ans = x**y;
    return ans;
}
console.log(getexe(3,5));

let getex = function (x,y)
{
    let ans = x**y;
    return ans;
}
console.log(getex(3,5));
//imp
let getexp = (x,y) =>
    {
        let ans = x**y;
        return ans;
    }
console.log(getex(3,5));
