const listInput = document.querySelector("#listInput");
const baseInput = document.querySelector("#baseInput");
const runBtn = document.querySelector("#runBtn");
const result = document.querySelector("#result");

runBtn.addEventListener("click", function () {
  const rawList = listInput.value.split(","); // 쉼표로 자르기
  const numbers = [];

  // 공백 제거 + 숫자로 변환
  for (let i = 0; i < rawList.length; i++) {
    const value = rawList[i].trim(); // 공백 제거
    const num = Number(value);       // 숫자로 변환
    if (Number.isFinite(num)) {      // 숫자인지 확인
      numbers.push(num);             // 유효하면 배열에 넣기
    }
}

 // 기준 숫자(base) 꺼내기
const base = Number(baseInput.value.trim());

 // 기준 숫자 검증
if (!Number.isFinite(base) || base === 0) {
    console.log("유효한 기준 숫자를 입력하세요");
    return;
  }

const multiples = [];
for(let i=0; i<numbers.length; i++){
  if(numbers[i]%base===0){
    multiples.push(numbers[i]);
  }
}

 console.log(multiples);
 result.textContent = multiples.length ? multiples.join(', ') : '해당 배수가 없습니다';
});