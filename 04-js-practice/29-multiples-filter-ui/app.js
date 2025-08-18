console.log("안녕하세요?")

const listInput = document.querySelector("#listInput");
const baseInput = document.querySelector("#baseInput");
const runBtn = document.querySelector("#runBtn");
const result = document.querySelector("#result");

runBtn.addEventListener("click", function(){
    result.textContent="";
    const lists = listInput.value.split(",");// 문자열을 배열
    const numbers = [];

    for(let i = 0; i<lists.length; i++){
        const value = lists[i].trim();
        if (value === "") continue; // 공백만 있으면 스킵
        const num = Number(value);

        if(Number.isFinite(num)){
            numbers.push(num);
        }

        result.textContent = ""
        const base = Number(baseInput.value.trim())
        if(!Number.isFinite(base)||base===0){
            console.log("유효한 숫자를 입력하세요");
            return; // 여기서 끝내기
        }

    }
})