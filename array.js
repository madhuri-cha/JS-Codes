let arr = new Array(1,2,6,'love');
console.log(arr);
/*refrence - type
a collection of elements stored in contiguous memory locations 
fixed size(must  be defined at the time of creation)
we can not dynamically store the elements
int arr[5] = {1, 2, 3, 4, 5}
fast index = o(1)
*/
/*Push();ending
Pop();ending
shift()// first element remove starting position
unshift()//add lefmost strarting position
slice()
*/
/********slicing********/
/*
console.log(arr.slice(0,3));
console.log(arr.splice(0,2, 'diya'));
*/
//map()
let brr = [9,8,7,6];
let map = brr.map((i) =>
{
    return i*i;
})
console.log(map)
//filter : access each element and return the array of that element which follows 
// the condition
let filt = [9,8,7,6];
let even = filt.filter((i) =>
{
    if(i % 2 == 0)
    {
        return true;
    }
    else{
        return false;
    }
})
console.log(even);

let str = [1,2,3,'python, java', 3,'c++'];
let st = str.filter((i) =>
{
 if(typeof(i) === 'string')
 {
    return true;
 }
})
console.log(st);
//reduce
let reduce = filt.reduce((acc, curr) =>
{
    return acc + curr;
},0)
console.log(reduce)
//sort : ascending
console.log(arr.sort())
//indexOf you can find index of any value
console.log(arr.indexOf(3))
//index of the first occurrence of a value in an array
//if not present then returns -1

//for in
let arr1 = [23,55,89,90]
for(let i in arr1) // for object
{
 console.log(arr1[i]);
}
//for Each
arr1.forEach((value, i) =>
{
    console.log("Number", value, "Index", i)

})
//foe Each
//iterable object
for(let value of arr1)
{
    console.log(value);
}
let fullname = "madhuri";
for(let i of fullname)
{
 console.log(i);
}
//we can pass array also here

/*for(let key in obj)
{
    console.log(key, " ", obj[key]);
}*/

let array = [10,20,30,40,50];

function sum1(array)
{
 let len = array.length;
 for(let i = 0; i < len; i++)
 {
    let summm = 0;
    summm = summm + array[i];
    return summm;
 }
}
console.log(sum1(array));


let add = (array) => 
{ 
let sum =0;
array.forEach((value)=>
{
    sum = sum + value;
});
return sum;
}
console.log(add(array));

let sum = (array) => 
{
 let len = array.length;
 for(let i = 0; i < len; i++)
 {
    let summm = 0;
    summm = summm + array[i];
    return summm;
 }
}
console.log(sum(array));
