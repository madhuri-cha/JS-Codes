// dynamic object : we can change value of 
//object members at runt time
/*
let obj = {
    age : 12,
    name : "love"
};
obj.color = "white";
obj.age = 14;
obj.name = "dev"
console.log(obj);
//
let a = {val : 12};
let b = a;
//not cloning , here only two refrence at stack variable
//cloning
let copy = obj;
console.log(copy)
let dest = {...obj};
console.log("clone", dest);
obj.age = 10;
let src = {
    age : 18,
    name : "love",
    rollno : 9
};
src.rollno = 8
let clone = Object.assign({}, obj, src)

console.log(src)
console.log("clone", clone)
let port = {};
for( key in obj)
{
    let newKey = key;
    let newValue = obj[key];
    port[newKey] = newValue;
}
obj.age = 19;

console.log("original",obj)
console.log(port)
//cloning : two objects ref to single value
// copy : two diff ref to single value
const person = {
    firstName : "Mayank",
    age : 21,
    lastName : "Pandey",
  };
  
  let newPerson = {};
  console.log(newPerson);      // {}
  
  for(let key in person){
      newPerson[key] = person[key];
  }
  
  console.log(newPerson);
  // Output : { firstName: 'Mayank', age: 21, lastName: 'Pandey' }
  const person1 = {
    name: 'Mayank',
    age: 21
  };
  
  const clonedPerson = Object.assign({}, person1);
  
  console.log(clonedPerson); 
  
  // Output : { name: 'Mayank', age: 21 } 
  const person2 = {
    name: 'Mayank',
    age: 21
  };
  
  const clonedPerson2 = {...person2};
  
  console.log(clonedPerson2); 
  */
  // Output : { name: 'Mayank', age: 21 }
  const person = {
    firstName : "Mayank",
    age : 21,
    lastName : "Pandey",
  };
  
  let newPerson = {};
  console.log(newPerson);      // {}
  
  for(let key in person){
      newPerson[key] = person[key];
  }
  person.age = 30;
  console.log(person);
  console.log(newPerson);
  // Output : { firstName: 'Mayank', age: 21, lastName: 'Pandey' }