/*
Assignment operator
in post increment value is not change in line where some operation is work
in pre incremet value is change in same line
*/
let a = 5;
console.log(a);
console.log("++a is ", ++a);
console.log("a++ is ", a++);

let b = 5;
console.log(b);
console.log("b++ is ", b++);
console.log("++b is ", ++b);

let c = 7;

console.log("c++ is ", c++);
console.log(c);
let d = 3;
console.log("++d is ", ++d);
console.log(d);
// (left = right) then right propagate to left 
/*
5
++a is  6
  a = 1
  a += 1 : a = a + 1
  a -=1 : a = a - 1
  a *= 4
  a /= 4 
  a %= 4
*/
a = 4
a *= 4;
console.log(a);
/*
  comparison opertaors
 : one value compare with another value
*/
a = 4;
b = 2;
console.log("4 == 2 ", a == b)
c = 4
console.log(" 4 == 4 ", a == c); // true
console.log("4 != 2 ", a != b); // true
a = 5; // number
b = "5";
// convert string into number then compare with
//loose operator 
console.log("5 == \"5\"", a == b)
    // strict operator ===
console.log("5 === \"5\" ", a === b)
    // strict operator (less than and greatar than operator)
b = 7
console.log(a >= b)
console.log(a <= b)

/* logical operator :
 compare multiple expressio
 for ex. for blood donation we required that the person must satiesfies both condition
 */

let con1 = a > b; //a = 5
let con2 = a == 5;
console.log(" && ", con1 && con2)

console.log("||", con1 || con2) // pipe operaator ||
console.log(!(con1 && con2))
    /*

    conditional operator : are use of checking condition 
    that condition is true or false
    for that purpose we use if else condition

       conditional operator    
    */
    // if statement

// else-if statement


