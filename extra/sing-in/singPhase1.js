let form = document.getElementById("forms");
form.addEventListener("submit",(evt) => {
    evt.preventDefault();
    let loop = setInterval(check,1000);
    return check();

function check() {
 
    //main values
    const name = document.getElementById("name").value;
    const email = document.querySelector("#email").value;
    const phone = document.querySelector("#phone").value;
    const address = document.querySelector("#address").value;
    const state = document.querySelector("#sts").value;
    const city = document.querySelector("#state").value;
    const pin = document.querySelector("#pin").value;

    //error values
    const errorName = document.querySelector("#errorName");
    const errorEmail = document.querySelector("#errorEmail");
    const errorPhone = document.querySelector("#errorPhone");
    const erroraddress = document.querySelector("#erroraddress");
    const errorstate = document.querySelector("#errorState");
    const errorCity = document.querySelector("#errorCity");
    const errorPin = document.querySelector("#errorPin");

    //special conditions
    const symbols = /^[a-z .A-Z]+$/;
    const addsymbol = /^[a-z A-Z0-9:,/]+$/;
    //checking names
    const nameTrimed = name.trim();
    if(nameTrimed==''){
        errorName.innerText="enter your name";
        errorName.style.visibility="visible";
        return false;
    }
    if(nameTrimed.length < 3){
        errorName.innerText="minimum 3 characters";
        errorName.style.visibility="visible";
        return false;
    }
    if(nameTrimed.length > 15){
        errorName.innerText="maximun 15 characters";
        errorName.style.visibility="visible";
        return false;
    }
    if(nameTrimed.match(symbols)){
        errorName.style.visibility="hidden";
    }
    else{
        errorName.innerText="symboles not  allow";
        errorName.style.visibility="visible";
        return false;
    }

    //checking email
    if(email==''){
        errorEmail.innerText="enter your name";
        errorEmail.style.visibility="visible";
        return false;
    }
    if((email.charAt(email.length-4) != '.') && (email.charAt(email.length-3) != '.')){
        errorEmail.innerText="invalid email";
        errorEmail.style.visibility="visible";
        return false;
    }else{
        errorEmail.style.visibility="hidden";
    }

    //checking phone
    if(phone==''){
        errorPhone.innerText="enter phone number";
        errorPhone.style.visibility="visible";
        return false;
    }
    if(phone.charAt(0) != 9 && phone.charAt(1) != 8 && phone.charAt(0) != 7){
        errorPhone.innerText="invalid phone number(start with 9,8,7)";
        errorPhone.style.visibility="visible";
        return false;
    }
    if(phone.length !== 10){
        errorPhone.innerText="invalid phone number(length = 10)";
        errorPhone.style.visibility="visible";
        return false;
    }else{
        errorPhone.style.visibility="hidden";
    }

    //checking address
    if(address.trim()==''){
        erroraddress.innerText="enter address";
        erroraddress.style.visibility="visible";
        return false;
    }
    if(address.trim().length < 10){
        erroraddress.innerText="please provide more details";
        erroraddress.style.visibility="visible";
        return false;
    }
    if(address.match(addsymbol)){
        erroraddress.style.visibility="hidden";
    }else{
        erroraddress.innerText="invalid address(only -,: allow)";
        erroraddress.style.visibility="visible";
        return false;
    }

    //checking state
    if(state==''){
        errorstate.innerText="select a state";
        errorstate.style.visibility="visible";
        return false;
    }else{
        errorstate.style.visibility="hidden";
    }

    //checking city
    if(city==''){
        errorCity.innerText="select a city";
        errorCity.style.visibility="visible";
        return false;
    }else{
        errorCity.style.visibility="hidden";
    }

    //checking pin code
    if(pin==''){
        errorPin.innerText="enter pin code";
        errorPin.style.visibility="visible";
        return false;   
    }
    if(pin.length !== 6){
       errorPin.innerText="invalid pin code";
       errorPin.style.visibility="visible";
       return false; 
    }else{
        errorPin.style.visibility="hidden";
    }
    if(true){
        console.log("true");
        clearInterval(loop);
        location.href=`singPhase2.html?${name}+${state}+${city}`;
        return false;
    }
}

});