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

let userInput = document.querySelector('#user');
let passInput = document.querySelector('#pass');
const error = document.querySelector('#error');
userInput.addEventListener('click',() => {
    error.style.visibility='hidden';
});
passInput.addEventListener('click',() => {
    error.style.visibility='hidden';
});
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
        location.href='../home/home.html';
    }
}
const submit = document.querySelector('#submit');
submit.addEventListener('click',() => {
    loginfun();
});