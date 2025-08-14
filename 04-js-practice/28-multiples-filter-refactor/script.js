const listInput = document.querySelector("#listInput");
const baseInput = document.querySelector("#baseInput");
const runBtn = document.querySelector("#runBtn");
const result = document.querySelector("#result");

runBtn.addEventListener("click", function() {
  console.log("clicked");
  const rawList = listInput.value.split(",");
  const numbers = [];
  
  for(let i = 0; i<rawList.length; i++){
    const value = rawList[i].trim();
    const num = Number(value);

    if(Number.isFinite(num)){
      numbers.push(num);
    }
  }

  const base =Number(baseInput.value.trim());// 기준 숫자 꺼내기
  if(!Number.isFinite(base)||base===0){ //기준숫자 검증
    console.log("유효한 숫자를 입력해주세요.");
    return;
  }

  const multiples = numbers.filter(function(num){
    return num% base===0;
  });

  console.log(multiples);
  // 4) 결과 표시 (if문)
if (multiples.length > 0) {
  result.textContent = "배수 목록: " + multiples.join(", ");
} else {
  result.textContent = "해당하는 배수가 없습니다.";
}
});