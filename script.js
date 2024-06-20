const loginButton = document.querySelector('#Register');
const centerLogin = document.querySelector('.centerlogin');
loginButton.addEventListener('click', () => {
    centerLogin.style.display='flex';
});
const cross = document.querySelector('#cross');
cross.addEventListener('click',() => {
    centerLogin.style.display='none';
});
const bars = document.querySelector('#bars');
const newNavBut = document.querySelector('.newNav-but');
bars.addEventListener('click', () => {
    newNavBut.style.display="flex";
    bars.style.display="none";
});
const crossNav = document.querySelector('#crossNav');
crossNav.addEventListener('click', () => {
    newNavBut.style.display="none";
    bars.style.display="inline";
});

let serInput = document.getElementById('ser-input');
let courseError = document.getElementById('course-error');
serInput.addEventListener('click', () => {
    courseError.style.visibility="hidden";
});
function course() {
    let trimed = serInput.value;
    trimed = trimed.trim();

    if(trimed == ''){
        courseError.style.visibility="visible";
        courseError.innerHTML='Please enter something';
        return false;
    }
    if(trimed.length < 5){
        courseError.style.visibility="visible";
        courseError.innerHTML='too short for search, type more details';
        return false;
    }
    if(true){
        location.href='extra/courses.html';
    }
}

let serBut = document.getElementById('ser-but');
serBut.addEventListener('click', () => {
    course();
});

let userInput = document.querySelector('#user');
let passInput = document.querySelector('#pass');
const error = document.querySelector('#error');
userInput.addEventListener('click',() => {
    error.style.visibility='hidden';
});
passInput.addEventListener('click',() => {
    error.style.visibility='hidden';
})
function loginfun() {
    const newuser = userInput.value;
    const newpass = passInput.value;
    if(newuser === 'Parth_classes')
    true;
    else{
        error.style.visibility='visible';
        error.innerHTML='*invalid username or password';
        return false;
    }
    if(newpass === 'parth@123')
    true;
    else{
        error.style.visibility='visible';
        error.innerHTML='*invalid username or password';
        return false;
    }
    if(true){
        location.href='home/home.html';
    }
}
const submit = document.querySelector('#submit');
submit.addEventListener('click',() => {
    loginfun();
});