const inputOne = document.querySelector("#input1");
const inputTwo = document.querySelector("#input2");
const button = document.querySelector("#compareBtn");
const text = document.querySelector("#result");

button.addEventListener("click", function(){
    const num1 = inputOne.value;
    const num2 = inputTwo.value;

    const value1 = Number(num1);
    const value2 = Number(num2);

       
    if (num1.trim() === "" || num2.trim() === "") {
        alert("입력해주세요!");
    }else if(isNaN(value1) || isNaN(value2)){
        alert("숫자가 아닙니다.")
    }else if (value1 > value2){
        text.innerText="1번숫자가 큽니다."
    }else if(value2>value1){
        text.innerText="2번 숫자가 큽니다."
    }else if(value1==value2){
        text.innerText="둘다 같은 숫자입니다."
    }else{
        console.log("예상치 못한 입력");
    }
});
