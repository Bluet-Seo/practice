const listInput = document.querySelector("#listInput");
const baseInput = document.querySelector("#baseInput");
const runBtn = document.querySelector("#runBtn");
const result = document.querySelector("#result");

runBtn.addEventListener("click", function(){
    result.textContent="";
    const lists = listInput.value.split(",");// 문자열을 배열
    const numbers = [];

    const base = Number(baseInput.value.trim())
        if(!Number.isFinite(base) || base===0){
            console.log("invalid base branch"); // 여긴 반드시 보이게!
            result.textContent="기준 숫자를 올바르게 써주세요."
            return; // 여기서 끝내기
        }

    for(let i = 0; i<lists.length; i++){
        const value = lists[i].trim();
        if (value === "") continue; // 공백만 있으면 스킵
        const num = Number(value);

        if(Number.isFinite(num)){
            numbers.push(num);
        }
        console.log(num)
    }
const filtered = numbers.filter(function(v) {
    return v % base ===0;
});

if (filtered.length === 0) {
    result.textContent = "배수인 값이 없습니다.";
    return;
}else{
    result.textContent = "배수인 값 : "+filtered.join(", ");
}
});