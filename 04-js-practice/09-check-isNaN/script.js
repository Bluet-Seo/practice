const input = document.querySelector("#userInput");
const button = document.querySelector("#checkBtn");
const text = document.querySelector("#result");

button.addEventListener("click", function(){
   const value = input.value;
   if(value.trim() === "") { 
        alert("입력값이 없습니다!");
   }else if(isNaN(value)){  
        alert("숫자가 아닙니다.")
   }else{
        text.textContent="올바르게 입력되엇습니다.";
}});
