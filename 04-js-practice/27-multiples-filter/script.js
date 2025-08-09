const listInput = document.querySelector("#listInput");
const baseInput = document.querySelector("#baseInput");
const runBtn = document.querySelector("#runBtn");
const result = document.querySelector("#result");

runBtn.addEventListener("click", function(){

const rawList = listInput.value.split(',');           // 쉼표로 나눔
const trimmedList = rawList.map(v => v.trim());       // 공백 제거
const numberList = trimmedList.map(Number);           // 숫자 변환

})