let bird1=document.getElementById('bird1');
let bird2=document.getElementById("bird2");
let forest=document.getElementById("forest");
let rocks=document.getElementById("rocks");
let water=document.getElementById("water");
let sectiontitle=document.getElementById("sectiontitle");

window.addEventListener('scroll',function(){
    let value=window.scrollY;
    sectiontitle.style.top = 50 + value * -.1 + '%';
    bird1.style.top = value * -.05 + '%';
    bird1.style.left = value * -.05 + '%';
    bird2.style.top = value * -.05 + '%';
    bird2.style.left =value * .05 + '%';
})
