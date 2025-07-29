const idInput = document.querySelector("#idInput");
const pwInput = document.querySelector("#pwInput");
const loginBtn = document.querySelector("#loginBtn");
const loginResult = document.querySelector("#loginResult");

loginBtn.addEventListener("click", function () {
  const id = idInput.value.trim();
  const pw = pwInput.value.trim();

  if(id===""&&pw===""){
    alert("아이디와 비밀번호를 입력해주세요");
    return;
  }
  if(id===""||pw===""){
    alert("모두 입력해주세요.");
    return;
  }

  const isOnlyNumber = !isNaN(pw);

  if(pw.length<6 || isOnlyNumber){
    alert("비밀번호는 6자이상, 문자포함해서 입력해주세요");

    return;
  }
  
  if(id==="mingyeong" && pw==="abc1234"){
    loginResult.textContent="로그인 했습니다."
  }else{
    loginResult.textContent="로그인 실패했습니다."
  }
 
});

