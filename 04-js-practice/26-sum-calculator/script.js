const numInput = document.querySelector("#numInput");
const sumBtn = document.querySelector("#sumBtn");
const result = document.querySelector("#result");

sumBtn.addEventListener("click", function(){

    const number = Number(numInput.value.trim());

    if(isNaN(number)){
        alert("숫자로만 입력해주세요");
        return;
    }

    result.innerHTML="";
    let sum = 0;// 누적용 변수는 for문 바깥에 넣어야 돌릴때마다 0으로 되돌아가지않음
    let expression = "";

    for(let i = 1; i<=number; i++){

       sum = sum+i;

     if (i === number) {
  expression += i + " = ";
} else {
  expression += i + " + ";
}
    result.innerHTML = `${expression}${sum}`;
    result.innerHTML += `<br>1부터 ${number}까지의 합계는 ${sum}입니다.`;    
    }
});

