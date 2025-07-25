const inputOne = document.querySelector("#input1");
const inputTwo = document.querySelector("#input2");
const button = document.querySelector("#checkBtn");
const text = document.querySelector("#result");

button.addEventListener("click", function(){

    if(inputOne.value.trim()==="" || inputTwo.value.trim()===""){
        alert("입력해주세요");
        return;
    }

    const num1 = Number(inputOne.value);
    const num2 = Number(inputTwo.value);

    const diff = Math.abs(num1 - num2);

    if(diff>=10){
        alert("두 수의 차이는 큽니다.");
    }else{
        text.innerText=`${diff}`
    }
});