//Garbage collector : no control, runs always, prime focus : management of memory, increase performance
//Garbage collector : no control, runs always, prime focus : management of memory, increase performance
let obj1 = { name: 'Mayank' };  // Object 1 created
let obj2 = { fname: 'Love' };  // Object 2 created

console.log(obj1.name);
console.log(obj2.fname);
obj1.reference = obj2;  // Object 1 now references Object 2
obj2.reference = obj1;  // Object 2 now references Object 1
console.log(obj1.fname);//undefined
console.log(obj2.name);//undefined
// At this point, both obj1 and obj2 are still in use and have references to each other

obj1 = null;  // Removing reference to Object 1
obj2 = null;  // Removing reference to Object 2
console.log(obj1.name);
console.log(obj2.fname);
// Even though we've removed the references to obj1 and obj2,
// the JavaScript engine can still identify that these objects are not reachable
// from the root of the application (global scope or any other reachable objects)
// and will automatically deallocate the memory occupied by these objects.
//when there is any variable is no longer in use

//error handling
/* 
1) compile time : at the time when code is parsing for execution
ex. syntax error
2) run time : when code is run(execute)
ex. logical error, unproper initilization and declaration

Handling : try - catch
*/

//when there is any variable is no longer in use

//error handling
/* 
1) compile time : at the time when code is parsing for execution
ex. syntax error
2) run time : when code at run(execute)
ex. logical error, unproper initilization and declaration

Handling : try - catch
*/
let x = 90; 
console.log("heyy")
console.log(x)
try{
    
    console.log("heyy")
    console.log(x)  
    console.log("try")
}
catch(err)
{
console.log("inside catch")
}
finally{
console.log("final")
}
//custom erroe code

try{
    //reference error
    console.log(x)
}
catch(err)
{
 throw new Error("bhai pahle declare kr, mg print kr");

}
try{
    //reference error
    console.log(x)
}
catch(err)
{
 throw new Error("bhai pehle declare kr, mg print kr");

}
let errorode = 100
if(errorode == 100)
{
    throw new Error("Invalid Json");
}
