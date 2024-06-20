const inputs = document.querySelectorAll("#otp"),
 button = document.querySelector("#submit");

inputs.forEach((input, index1) => {
    input.addEventListener("keyup", (e) => {
    const currentInput = input,
    nextInput = input.nextElementSibling,
    prevInput = input.previousElementSibling;

    if(currentInput.value.length > 1){
        currentInput.value = "";
        return;
    }
    if(nextInput && nextInput.hasAttribute("disabled") && currentInput.value !== ""){
        nextInput.removeAttribute("disabled");
        nextInput.focus();
    } 
    if(e.key === "Backspace"){
        inputs.forEach((input, index2) => {
            if(index1 <= index2 && prevInput){
                input.setAttribute("disabled", true);
                currentInput.value ="";
                prevInput.focus();
            }
        });
    }
    })
})

window.addEventListener("load", () => {
    inputs[0].focus();
    missionSet();
});

const resend = document.querySelector("#textResend");
let count = 0;
function missionSet() {
    const startimemin = 1;
    let time = startimemin * 60;
    const countdownEl = document.getElementById('otpTimer');
    let timer = setInterval(updatecount,1000);
    function updatecount(){
        if(time < 1) {
            clearInterval(timer);
            resend.style.color="#0904FF";
            count=1;
        }
    const minute = Math.floor(time/60);
    let second = time % 60;

    countdownEl.innerHTML= minute+':'+second;
    time--;
    }
}

resend.addEventListener("click", () => {
    if(count==1){
        missionSet();
        resend.style.color="#848484";
        count=0;
    }
});

const lastFill = document.querySelector(".last");
const error = document.querySelector("#error");
button.addEventListener("click", () => {
    if(lastFill.value==""){
        error.innerHTML ="fill 4 digit otp";
        error.style.visibility="visible";
        return false; 
    }else{
        const load = document.querySelector("#loader");
        load.style.display="block";
        error.style.visibility="hidden";
        let checking = setInterval(check, 3000);
        function check() {
            load.style.display="none";
            error.innerHTML="invalid otp";
            error.style.visibility="visible";
            clearInterval(checking, 3000);
        }
        
    }
});
lastFill.addEventListener("focus", () => {
    error.style.visibility="hidden";
})