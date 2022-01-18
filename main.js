//1
let playList = [
    {author: "LED ZEPPELIN",song:"STAIRWAY TO HEAVEN"},
     
    {author: "QUEEN", song:"BOHEMIAN RHAPSODY"},
    
    {author: "LYNYRD SKYNYRD",song:"FREE BIRD"},
    
    {author: "DEEP PURPLE",song:"SMOKE ON THE WATER"},
    
    {author: "JIMI HENDRIX", song:"ALL ALONG THE WATCHTOWER"},
    
    {author: "AC/DC", song:"BACK IN BLACK"},
    
    {author: "QUEEN", song:"WE WILL ROCK YOU"},
    
    {author: "METALLICA", song:"ENTER SANDMAN"}
];
     
let div = document.getElementById('playlist');
let ol = document.createElement('ol');
div.appendChild(ol);
    
for (let i = 0; i < playList.length; i++) {
        let li = document.createElement('li');
        li.innerHTML = playList[i].author +  ' '+ '-' + ' '+ '"' + playList[i].song + '"';
        ol.appendChild(li);
}
    
//2
let modal = document.getElementById('modal');
let btn = document.getElementById('btn');
let close = document.getElementById('close');

btn.onclick = function() {
        modal.style.display = "block";
}
close.onclick = function() {
        modal.style.display = "none";
}

//3
const cirkles = document.querySelectorAll(".cirkle");
let lights = document.getElementById('lights');
let activeLight = 0;



function changeLight() {
    cirkles[activeLight].className = 'cirkle';
    activeLight++;

    if(activeLight > 2) {
        activeLight = 0
    }

    const currentLight = cirkles[activeLight];
    currentLight.classList.add(currentLight.getAttribute("color"));
}
lights.onclick = function() {
    changeLight();
}
