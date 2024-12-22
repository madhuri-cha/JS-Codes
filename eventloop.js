//sync
//console.log("Hii");
//console.log("Love");

//async

function sayName()
{
 console.log("Heyyyyyyyyyyyyyyyy");
}
//setTimeout(sayName, 2000);
/*
//Blocking
console.log("Hii sanu");
setTimeout(sayName, 3000);

console.log("Love babbar");
console.log("Hii");
console.log("Love");
 */
//EventListener//async
console.log("Hii sanu");
setTimeout(sayName, 3000);
console.log("Love babbar");
let btn = document.querySelector("button");
btn.addEventListener( 'click', function onClick()
{
    console.log("you have click the button");
});

console.log("Hii");
console.log("Love");
