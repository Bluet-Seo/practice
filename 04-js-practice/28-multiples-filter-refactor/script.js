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

  const base =Number(baseInput.value.trim());
  if(!Number.isFinite(base)||base===0){
    console.log("유효한 숫자를 입력해주세요.");
    return;
  }
});