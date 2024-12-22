//alert("hii")
//prompt("hellow");
//LOOPING

  looping in js

for (let i = 1; i < 5; i++) {
    console.log("Madhuri");
}

let i = 1;
while (i <= 5) {

    console.log("hiiii");
    i++;
}

let j = 1;
do {
    console.log("hiiii");
    j++;
} while (j <= 3);

//for-of loop = use in string and arrays fro iteration
let str = "madhuri";
let size = 0;
for (let i of str) {
    console.log("i", i);
    size++;
}
console.log("size", size)
    // for-in = are use for object 
const student = {
    name: "jay",
    age: 30,
    cgpa: 9.0
}
for (let i in student) {
    console.log("key", i, "value", student[i]);
    i++;
}
// practice question

for (let i = 0; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}