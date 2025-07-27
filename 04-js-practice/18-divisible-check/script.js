const inputOne = document.querySelector("#input1");
const inputTwo = document.querySelector("#input2");
const button = document.querySelector("#checkBtn");
const text = document.querySelector("#result");

button.addEventListener("click", function(){

    const text1 = inputOne.value;
    const text2 = inputTwo.value;

    if(text1.trim()===""||text2.trim()===""){
        alert("입력해주세요")
        return;
    }
    const num1 = Number(text1);
    const num2 = Number(text2);

    if(isNaN(num1)||isNaN(num2)){
        alert("숫자만 입력해주세요")
    }else if(num1%num2==0){
        text.innerText=text.innerText = `${num1}은(는) ${num2}로 나누어떨어집니다`;
    }else{
        text.innerText="나누어떨어지지 않습니다";
    }

});