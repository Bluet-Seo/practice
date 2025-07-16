const inputOne = document.querySelector("#numberOne");
const inputTwo = document.querySelector("#numberTwo");
const button = document.querySelector("#addBtn");
const text = document.querySelector("#result")

button.addEventListener("click", function(){
const num1 = Number(inputOne.value);
const num2 = Number(inputTwo.value);
const sum = num1 + num2;
text.textContent = sum;
    if(sum>=100){
        text.style.color="red";
        text.textContent = sum+" : 100넘었어요!";
    }else{
        text.style.color="black";
    }
        })

