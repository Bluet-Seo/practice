const inputOne = document.querySelector("#input1");
const inputTwo = document.querySelector("#input2");
const button = document.querySelector("#compareBtn");
const text = document.querySelector("#result");

button.addEventListener("click", function(){
    const num1 = Number(inputOne.value);
    const num2 = Number(inputTwo.value);
    if(num1>num2){
        text.innerText="첫번째 숫자가 큽니다"
    }else if(num2>num1){
        text.innerText="두번째 숫자가 큽니다"
    }else{
         text.innerText="둘다 같은 숫자입니다"
    }
});