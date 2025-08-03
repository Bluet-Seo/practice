const numInput = document.querySelector("#numInput");
const printBtn = document.querySelector("#printBtn");
const resultArea = document.querySelector("#resultArea");

printBtn.addEventListener("click", function(){

    const number = numInput.value.trim();
    const input = Number(number);

    if(isNaN(input)){
        alert("숫자만 입력하세요")
        return;}

    resultArea.innerHTML = "";// 이전 내용 지움

    for (let i = 1; i <=input; i++) {
        resultArea.innerHTML += i + "<br>";
    }
});

