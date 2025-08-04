const danInput = document.querySelector("#danInput");
const printBtn = document.querySelector("#printBtn");
const result = document.querySelector("#result");

printBtn.addEventListener("click", function(){
     const dan = Number(danInput.value.trim());
  
  if (isNaN(dan)) {
    alert("숫자만 입력해주세요!");
    return;
  } 

    result.innerHTML = ""; // 기존 결과 초기화

  for (let i = 1; i <= 9; i++) {

    const resdan = dan* i;
   
    result.innerHTML+=  `${dan} X ${i} = ${resdan}<br>`
  
}
})