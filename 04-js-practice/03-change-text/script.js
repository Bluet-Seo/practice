const text = document.getElementById("statusText");
const button = document.getElementById("changeBtn");

button.addEventListener("click", function(){ /*버튼클릭시이벤트*/ 
    text.textContent="클릭완료"/*텍스트가 클릭완료로 변경*/
});