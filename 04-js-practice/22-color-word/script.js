const colorInput = document.querySelector("#colorInput");
const colorBtn = document.querySelector("#colorBtn");
const colorText = document.querySelector("#colorText");

colorBtn.addEventListener("click", function () {

const input = colorInput.value.trim().toLowerCase();

if (input === "red") {
   colorText.style.color="red";
} else if (input === "blue") {
  colorText.style.color="blue";
} else if (input === "green") {
  colorText.style.color="green";
} else {
  colorText.textContent="지원하지 않는 색상입니다."
    colorText.style.color="black";}
});