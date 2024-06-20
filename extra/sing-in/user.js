let user = document.querySelector('#user');
const error = document.querySelector('#error');
user.addEventListener('click',() => {
    error.style.visibility='hidden';
});
function loginfun() {
    const newuser = user.value;
    if(newuser === ''){
        error.style.visibility='visible';
        error.innerHTML='*enter phone number';
        return false;
    }
    if(isNaN(newuser)) {
        error.style.visibility='visible';
        error.innerHTML='*enter phone number (input is not a number)';
        return false;
    }
    if(newuser.length == 10)
        true;
    else{
        error.style.visibility='visible';
        error.innerHTML='enter valid number';
        return false;
    }
    if(newuser.charAt(0) != 9 && newuser.charAt(0) != 8 && newuser.charAt(0) != 7) {
        error.style.visibility='visible';
        error.innerHTML='enter valid number (start with 9,8,7)';
        return false;
    }
    if(true){
        location.href='otp.html';
    }
}
const submit = document.querySelector('#submit');
submit.addEventListener('click',() => {
    loginfun();
});