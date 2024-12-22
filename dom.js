//window is create by browser
//DOM
//window is global object
//dom : tree like structure
//convert tags into token using tokeniser, and token converts into node
//Dom : contain html file, which is convert into js object
//Bom : browser object model
//JS core
// css : internal, external, inline
//get
let parentElement = document.getElementById("spara");
console.log(parentElement)
//single style we can add
console.log(parentElement.style);
//set
parentElement.style.backgroundColor = 'blue';
//get
let secElement = document.getElementById('sdiv')
console.log(secElement);
console.log(secElement.style.cssText)
//mulitple style we can add
//set
secElement.style.cssText = "backgroundColor : red; color : white;"

let firstElement = document.querySelector('#fdiv')
console.log(firstElement)
firstElement.setAttribute('class', 'secdivClass')
//set attribute

//classname 
let para = $0;
console.log(para)
//get
console.log(para.className)
//set : we can also add new class and we can also change the class name
para.className = "goahan, bulbul"
para.className
//.classList = in the form of array, add, remove, toggle, contains







