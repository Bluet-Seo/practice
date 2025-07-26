const inputOne = document.querySelector("#input1");
const inputTwo = document.querySelector("#input2");
const button = document.querySelector("#compareBtn");
const text = document.querySelector("#result");

button.addEventListener("click", function(){

    if(inputOne.value.trim()===""|| inputTwo.value.trim()===""){
        alert("입력해주세요");
         return;
    }
    const num1 = Number(inputOne.value);
    const num2 = Number(inputTwo.value);

    if(isNaN(num1)||isNaN(num2)){
        alert("숫자로 입력해주세요")
    }else if(num1>num2){
        text.innerText=`${num1}이 더 큽니다.`;
    }else if(num2>num1){
        text.innerText=`${num2}이 더 큽니다.`;
    }else{
        text.innerText="둘다 같은 숫자입니다."
    }
});
