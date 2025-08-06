const numInput = document.querySelector("#numInput");
const evenBtn = document.querySelector("#evenBtn");
const oddBtn = document.querySelector("#oddBtn");
const result = document.querySelector("#result");

evenBtn.addEventListener("click", function(){
    const num2 = Number(numInput.value.trim());

    if(isNaN(num2)){
        alert("숫자만 입력해주세요");
        return;
    }
    result.innerHTML="";

    for(let i = 1; i<= num2; i++){
        if(i%2===0){
             result.innerHTML+=`${i}<br>`
        }
    }
 
}) 

oddBtn.addEventListener("click", function(){
const num1 = Number(numInput.value.trim());

    if(isNaN(num1)){
        alert("숫자만 입력해주세요");
        return;
    }
    result.innerHTML="";

    for(let i = 1; i<= num1; i++){
        if(i%2===1){
             result.innerHTML+=`${i}<br>`
        }
    }
})