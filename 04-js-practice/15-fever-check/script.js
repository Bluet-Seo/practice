const input = document.querySelector("#inNum");
const button = document.querySelector("#checkBut");
const text = document.querySelector("#result");

button.addEventListener("click", function(){
    const num = Number(input.value);

    if(input.value.trim()===""){
        alert("체온을 입력해주세요");
    }else if(num>=38){
        text.innerText="열이 납니다";
    }else if(num>=35.5){
        text.innerText="정상체온입니다.";
    }else{
        alert("사람이 아닌 것 같습니다.");
    }
})