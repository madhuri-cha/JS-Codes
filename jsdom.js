/*
1)Accessssssssssssssss
//id
document.getElementById("fpara");
//id
document.getElementById("fheading");
//class
document.getElementsByClassName('textmatter');
//tag
document.getElementsByTagName('p');

//select all at a time
//tag
document.querySelector('p');
//id
document.querySelector('#fpara');
//id
document.querySelector('#fpara');
//class
document.querySelector('textmatter');

//
2)Modification : innerHTML
let button = $0;
button.innerHTML;
button.innerHTML = '<pre>Hello Duniya</pre>';
button.innerHTML = '<p>Hello</p>';

// text_content : content present in html code
retrived text element
let element = document.querySelector("#fdiv");

element.textContent
'\n     \n        This is my First \n        \n            Text\n        \n     \n     This is my second para\n    '

//innerText = only rendering cotent on browser. //hidden not render.

element.innerText
'This is my First Text\n\nThis is my second para'
*/

/*
3)adding element:

1)creation of element 
2)append child in tag

*/

/*
let fheading = document.createElement('h1');//creation of h1 tag
fheading.textContent = "I am python lover";//adding text in h1 tag

let bodyTag = document.querySelector('body');// adding element in body tag 

bodyTag.appendChild(fheading);//append now
//at end child is add
*/


// 4) add element at any postion using --------------------------------------- insertAdjacentHTML()
/*
1) at which postion you have four options
   --before begin
   --after begin
  --before end
  --after en

2) WHat html content
*/


/*
let element1 = document.createElement('span'); //create
element1.textContent = "hey how you doing";//now add text
let mydiv = document.querySelector("#mydiv");//now select particular tag , then add in this tag.

mydiv.insertAdjacentElement('beforebegin', element1);
mydiv.insertAdjacentElement('afterbegin', element1);
mydiv.insertAdjacentElement('beforeend', element1);
mydiv.insertAdjacentElement('afterend', element1);
*/

//How to remove child
//1) At first retrive which child want to remove from parent
let parent = document.querySelector("#mydiv");
//2) then child which you want to remove
let child = document.querySelector("#fpara");    
//3)now remove child
parent.removeChild(child);

let p = document.querySelector("#mydiv");
let c = document.querySelector("#spara");

p.removeChild(c);