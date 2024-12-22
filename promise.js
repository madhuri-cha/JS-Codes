//run successfully
/*
let pro1 = new Promise((resolve, reject) => {

    console.log("Heyyy");
    resolve(1);
})
//error
let promise2 = new Promise((resolve, reject) =>{
    console.log("Reject");
    reject(new Error("Internal server down"));
})
//pending
let promise3 = new Promise(() => {
    console.log("Madhuri");
})
*/
//then - catch block
let promise1 = new Promise((resolve, reject) => {

    let success = true;
    if(success)
    {
     resolve("Win");
    }
    else
    {
        reject("Loose");
    }
});

promise1.then((msg) =>{
    console.log("First msg sucess : "+msg);
    return "fullfill sec msg";
}).then((msg) =>
{  
    console.log("sec msg is : "+msg);
    return "fullfill third msg ";
}).then((msg) =>
{
    console.log("third msg is : "+msg);
}).catch((error) => {
    console.log("Error is "+error);
}).finally(() =>{
    console.log("Done!!!!!!!!!!!!");
})
/*
promise1.then((msg) => { console.log("the resolve msg is " +msg);}
).catch((error) => { console.log("the reject msg is" +error);
});
//write promise for
//asynchronous code
let firstpromise = new Promise((resolve, reject) => {
    setTimeout( function sayname()
{
    console.log("Name is here");
},1000);
});

let secpromise = new Promise((resolve, reject) => {
    setTimeout( function sayname()
{
    console.log("sec promise");
},1000);
resolve(1);
});

let tpromise = new Promise((resolve, reject) => {
    setTimeout( function sayname()
{
    console.log("third promise");
},1000);
reject(0);
});
*/
let promiseone = new Promise((resolve, reject) =>{
    setTimeout(resolve, 1000, "First");
});
let promisetwo = new Promise((resolve, reject) =>{
    setTimeout(resolve, 3000, "sec");
    reject(100);
});
let promisethree = new Promise((resolve, reject) =>{
    setTimeout(resolve, 5000, "third");
});
//marked as done only when all promise inside in array will execute
Promise.all([promiseone, promisetwo, promisethree]).then((values) => {
    console.log(values);
})
Promise.all([promisetwo, promisethree]).then((values) => {
    console.log(values);
})
Promise.all([promisetwo, promiseone, promisethree]).then((values) => {
    console.log(values);
})

Promise.all([promisetwo, promiseone, promisethree]).then((values) => {
    console.log(values);
})