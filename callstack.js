//hoisting = process in which var dec, func dec moves to top of code
//moves at top of code
//in variable only name moves not value

const arr = [
   function(a,b)
   {
     return a-b;
   },
   function(a,b)
   {
     return a+b;
   }

]
let first = arr[1];
let ans = first(2,3);
console.log(ans);
let obj =
{
    age : 25,
    wt : 56,
    greet : ()=>
    {
        console.log("Heyyyys")
    }
}
console.log(obj.greet())
obj.greet()
let greetme = function()
{
    console.log("Heyyyy")
}
greetme()
/*VARIABLE SCOPE 
-GLOBAL 
-Function
-BLOCK
*/
//global scope
var age = 35;
//function scope
function greetyou()
{
    var full = "Dev";
    console.log(full)
}
greetyou()
//console.log(full) error

//block scope 
//by default var is global scope
{
    var wt = 23;
}
console.log(wt)
{
    let wt = 23;
    console.log(wt)
}
console.log(wt)

//temporal dead zone
console.log(marks)
console.log("Babbar")
console.log("Love")
let marks = 100;
console.log(marks)