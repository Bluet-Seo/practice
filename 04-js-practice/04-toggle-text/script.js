const text = document.getElementById("statusText");
const button = document.getElementById("toggleBut");

let isClicked = false;/*안누른상태를 기억하는변수 */

button.addEventListener("click", function(){
    if(isClicked){
        text.textContent="버튼 눌러보세요!";/*text.textContent는 글자내용 바꿔줌 */
    }else{
        text.textContent="눌렀어요!";/*false자바스크립트 첫시작 */
    }

    isClicked = !isClicked;/*!는 부정이고 왓다갓다하게 만들어줌 */


});