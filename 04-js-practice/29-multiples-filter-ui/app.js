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
        if (value === "") continue;
        const num = Number(value);

        if(Number.isFinite(num)){
            numbers.push(num);
        }

    }
})