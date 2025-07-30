const scoreInput = document.querySelector("#scoreInput");
const checkBtn = document.querySelector("#checkGradeBtn");
const result = document.querySelector("#gradeResult");

checkBtn.addEventListener("click", function () {
  const value = scoreInput.value.trim();
  const score = Number(value);

  if(value===""){
    alert("점수를 입력해주세요.");
    return;
    
  }else if(isNaN(value)){
    alert("숫자만 입력가능합니다.");
    return;
  }

  if(score>100||score<0){
    alert("0~100까지의 점수를 입력해주세요")
     return;
  }else if(score>90){
    result.textContent="A등급";
  }else if(score>80){
     result.textContent="B등급";
  }else if(score>70){
    result.textContent="C등급";
  }else if(score>60){
     result.textContent="D등급";
  }else{
    result.textContent="F등급";
  }
    

});
