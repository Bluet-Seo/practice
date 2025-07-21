const input = document.querySelector("#input");
const button = document.querySelector("#checkBtn");
const result = document.querySelector("#result");

button.addEventListener("click", function () {
  const value = input.value;

  // 1. 입력값 공백 체크
if (value.trim() === "") {
    alert("입력해주세요!!")
}

// 2. 숫자인지 아닌지 검사 (NaN이면 안 됨)
else if (isNaN(Number(value))) {
    alert("숫자로 입력해주세요")
}

// 3. 그 외엔 결과 출력 (정상 입력)
else {
     result.innerText=`${value}`
 
}
});
