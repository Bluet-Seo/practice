const idInput = document.querySelector("#idInput");
const pwInput = document.querySelector("#pwInput");
const loginBtn = document.querySelector("#loginBtn");
const loginResult = document.querySelector("#loginResult");

loginBtn.addEventListener("click", function () {
  const id = idInput.value.trim();
  const pw = pwInput.value.trim();

  if(id===""&&pw===""){
    alert("입력해주세요")
  }
 
});
 // 1. 입력값이 모두 비어있는지 확인
  // 2. 하나라도 비어있는지 확인
  // 3. 비밀번호가 너무 짧거나 숫자만인지 확인
  // 4. 아이디/비밀번호 일치 확인
  // 5. 그 외엔 모두 실패 처리
