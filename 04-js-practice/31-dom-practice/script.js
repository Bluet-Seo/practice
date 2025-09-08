const text = document.querySelector(".text");
const btn = document.querySelector(".btn");

btn.addEventListener("click", function(){
    text.textContent = "반가워요!";
    text.style.color = "blue";
});
