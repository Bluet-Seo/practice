const text = document.querySelector(".text");
const btn = document.querySelector(".btn");

btn.addEventListener("click", function(){
    text.textContent = "반가워요!";
    const rainbow = ["red", "orange", "yellow", "green", "blue", "navy", "purple", "pink"];
    const num = Math.floor(Math.random() * rainbow.length);
    text.style.color= rainbow[num];

});
