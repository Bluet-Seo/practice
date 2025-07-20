const input = document.querySelector("#input");
const button = document.querySelector("#checkBtn");
const result = document.querySelector("#result");

button.addEventListener("click", function(){
    const value = input.value;

    const numberValue = Number(value);
    const isNotNumber = isNaN(numberValue);

    result.innerText =`변환결과 : ${numberValue}, 숫자가 아니네요! ${isNotNumber};`
})