const input = document.querySelector("#number")
const button = document.querySelector("#checkBtn")
const text = document.querySelector("#result")

button.addEventListener("click", function(){
    const num = Number(input.value);// 숫자로 변환!
        if(num < 0){
            text.textContent="음수입니다";
            text.style.color="red";
        }else if(num<=100){
            text.textContent="적절한 범위입니다";
            text.style.color="black";
        }else{
            text.textContent="100 초과입니다!";
            text.style.color="blue";
        }

    });