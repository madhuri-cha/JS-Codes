//event _ Target : //

/*
let fpara = document.getElementById('fpara')
console.log(fpara.textContent = "Heyyyyyyyyy")

function changeText()
{
    let para = document.getElementById('para')
    console.log(para.textContent = "Heyy samu")
}

let para = document.getElementById('para');
para.addEventListener('click', changeText)//you can change text just by clicking

//para.removeEventListener('click', changeText)


//announcement made by browser
//phase of event = Tree like structure
//caputring phase : from top to bottom accessing
//at - target value
//bubble phase = from target value bottom up approch traversing
//add event listener add at bubbling phase by default
//event object : 

/*
function changeText(event)
//{
    console.log(event)
    let para = document.getElementById('para')
    console.log(para.textContent = "Heyy samu")
}
*/

//let spara = document.getElementById('para');
//spara.addEventListener('click', changeText);
//Default Action :
//anchor tag
/* 
let anchorTag = document.getElementById('fanchor')
anchorTag.addEventListener('click', function(event){
    //preventing default behaviour
    event.preventDefault();
    anchorTag.textContent = "Click done"
});
*/
/*
let paras = document.querySelectorAll('p')
console.log(paras)
for(let i = 0; i<paras.length; i++)
{
    let para = paras[i]
    para.addEventListener('click', function(){
        
     alert("You have Clicked on para : " + (i+1));
    })
}
*/
let paras = document.querySelectorAll('p')
function alertPara(event)
{
    alert("you have click on para" +(i+1));
}

for(let i = 0; i<paras.length;i++)
{
    let para = paras[i];
    para.addEventListener('click', alertPara)
}













