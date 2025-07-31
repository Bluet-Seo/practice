const numInput = document.querySelector("#numInput");
const checkBtn = document.querySelector("#checkBtn");
const result = document.querySelector("#result")

checkBtn.addEventListener("click", function () {
  const value = numInput.value.trim();
  const number = Number(value);

  if(isNaN(number)){
    alert("숫자로만 입력해주세요.")
    return;
  }else if(number%2==0){
    result.textContent=`${number}는 짝수입니다.`
  }else{
    result.textContent=`${number}는 홀수입니다.`
  }
});