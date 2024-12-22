let age = 23;
let age1 = 23;
console.log(age | age1);
let a = 2;
let b = 2;
console.log(a ^ b);
console.log(a | b);
b = 5;
console.log(a & b);
console.log("hey");
console.log(~(b));
// if-else
if(age > 18)
{
    console.log("yes");

}
else
{
    console.log("no");
}
//literals g/////////////////////////////
//loops and strings
//for each
//for of
//for in
//****************************
let i = 1;
/*for(;;)
{
    console.log(i);
}
    */
for(;;)
    {
        console.log(i);
        i++;
        if(i>=10)
        {
            break;
        }
    } 
 for(;;)
        {
            console.log(i);
            i++;
            if(i>=10)
            {
                break;
            }
        } 
let fullName = `hey shivani`;// string is primitive, immutable, 
//stored in memory directly
let fisrtName = new String("Madhu");
console.log(fisrtName);
//diff : object, mutable
let op1 = "hey";
let op2 = "rahul";
let op3 = `${op1} + ${op2}`//bacstick most imp
console.log(op3);
console.log(op3.toLowerCase())
console.log(op3.toUpperCase())
let str = "python";
console.log(str.substring(2,4))
console.log(str.substring(2));
console.log(str.substring(2,5));
console.log(str.substring(0,3));
let sen = "python is developed by guido rossum"
let words = sen.split(' ');
console.log(words);
let sentence = "python is \"developed\" by guido rossum"
let words1 = sentence.split(' ');
console.log(words1);
let sen1 = "python \is \developed \by guido rossum"
let words2 = sen1.split(' ');
console.log(words2);
// '\' is a special character you can use it for splitting
let lan = "python \\is \\developed \\by \\guido rossum"
let array = lan.split('\\');
console.log(array);
console.log(array.join(''))
