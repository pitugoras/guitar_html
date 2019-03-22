var img = document.querySelector('img');
img.onclick = function(){
    var src = img.getAttribute('src');
    if(src === 'images/guitar1.jpg') 
        img.setAttribute('src', 'images/guitar2.jpg')
    else
        img.setAttribute('src', 'images/guitar1.jpg')
}

var button = document.querySelector('button');
var heading = document.querySelector('h1');
if(!localStorage.getItem('name')){
    SetNameToLocalStorage();
}
else{
    PrintName();
}

button.onclick = function()
{
    SetNameToLocalStorage();
}

function SetNameToLocalStorage(){
    var strName  = prompt("Please enter your name.");
    localStorage.setItem('name', strName);
    PrintName()
}

function PrintName()
{
    heading.textContent = 'Guitar Hero ' + localStorage.getItem('name');
}