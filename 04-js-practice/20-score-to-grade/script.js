const scoreInput = document.querySelector("#scoreInput");
const checkBtn = document.querySelector("#checkGradeBtn");
const result = document.querySelector("#gradeResult");

checkBtn.addEventListener("click", function () {
  const value = scoreInput.value.trim();
  const score = Number(value);

  // 1. 빈칸이면 경고
  // 2. 숫자 아니면 경고
  // 3. 0~100 사이가 아니면 경고
  // 4. 점수에 따라 A~F 등급 출력
});
