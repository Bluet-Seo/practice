const leg = document.querySelector("#leg");console.log(leg?.tagName);
const counter = document.querySelector("#counter");
const oneBtn = document.querySelector("#oneBtn");
const twoBtn = document.querySelector("#twoBtn");

oneBtn.addEventListener("click", function(){
    const messages = ["오늘은 맑음", "흐린날씨에요", "햇빛이 따뜻해요", "즐거워요"];

    const numone =Math.floor(Math.random() * messages.length);
    leg.textContent=messages[numone];
})