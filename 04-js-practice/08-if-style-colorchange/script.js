/*숫자 2개더한결과가 100이상이면 메세지 보여주고, 150이상이면 배경색도 바뀌는 조건문 실습*/ 
const inputOne = document.querySelector("#numberOne");
const inputTwo = document.querySelector("#numberTwo");
const button = document.querySelector("#addBtn");
const text = document.querySelector("#result")

button.addEventListener("click", function(){
const num1 = Number(inputOne.value);
const num2 = Number(inputTwo.value);
const sum = num1 + num2;
text.textContent = sum;
    if(sum>=150){
        text.style.backgroundColor="darkred";
        text.style.color="red";
        text.textContent = sum+" : 150넘었어요!";
    }else if(sum>=100){
        text.textContent = sum+" : 100넘었어요!";
        text.style.backgroundColor="lightblue";
        text.style.color="blue";
    }
    else{
        text.style.color="black";
    }
        })

