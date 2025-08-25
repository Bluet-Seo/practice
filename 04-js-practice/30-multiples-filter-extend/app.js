const base = document.querySelector("#base");
const limit = document.querySelector("#limit");
const checkBtn = document.querySelector("#checkBtn");
const result = document.querySelector("#result");

checkBtn.addEventListener("click", function(){
    result.textContent=""//결과 초기화
    const baseInput = Number(base.value.trim());
    if(!Number.isFinite(baseInput) || baseInput===0){
        result.textContent="올바른 숫자를 입력해주세요"
        return;
    }
    const limitInput = Number(limit.value.trim());
     if(!Number.isFinite(limitInput) || limitInput===0){
        result.textContent="올바른 숫자를 입력해주세요"
        return;
    }
    const multiples =[];
    for(let i = 1; i<limitInput; i++){
        if(i % baseInput ===0){multiples.push(i)};
        };
        if (multiples.length === 0) {
        result.textContent = "배수 없음";
        return;
  }
  // 항상 오름차순 정렬
multiples.sort(function(a, b){
  return a - b;
});

  result.textContent = multiples.join(", ");
});

