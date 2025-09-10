const text = document.querySelector(".text");
const btn = document.querySelector(".btn");

btn.addEventListener("click", function(){
    const language = ["반가워요", "사랑해요", "좋아해요", "신나요", "오늘도 잘되는날"];
    const rainbow = ["red", "orange", "yellow", "green", "blue", "navy", "purple", "pink"];
    const num = Math.floor(Math.random() * rainbow.length);
    const seqs = Math.floor(Math.random() * language.length);
    text.style.color= rainbow[num];
    text.textContent = language[seqs];

});
