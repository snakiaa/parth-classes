let form = document.getElementById("forms");
form.addEventListener("submit",(evt) => {
    evt.preventDefault();
    let loop = setInterval(check,1000);
    return check();

function check() {
        //main values
        const name = document.getElementById("name").value;
        const pass = document.querySelector("#pass").value;
        const policy = document.querySelector("#policy");

        //error values
        const errorName = document.querySelector("#errorName");
        const errorpass = document.querySelector("#errorPass");
        const errorPolicy = document.querySelector("#errorPolicy");
        //special conditions
        const symbols = /^[a-zA-Z_]+$/;
        const passsymbol = /^[a-zA-z@/_0-9-]+$/;

         //checking username
        const nameTrimed = name.trim();
        if(nameTrimed==''){
            errorName.innerText="enter your username";
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
            errorName.innerText="space and symbols not allow (expected _)";
            errorName.style.visibility="visible";
            return false;
        }

        //checking password
        if(pass==''){
            errorpass.innerText="enter password";
            errorpass.style.visibility="visible";
            return false;
        }
        if(pass.length < 5){
            errorpass.innerText="password is very small";
            errorpass.style.visibility="visible";
            return false;
        }
        if(pass.length > 10){
            errorpass.innerText="to long password";
            errorpass.style.visibility="visible";
            return false;
        }
        if(pass.match(passsymbol)){
            errorpass.style.visibility="hidden";
        }else{
            errorpass.innerText="only( @ _ / -) allow";
            errorpass.style.visibility="visible";
            return false;
        }

        //checking privacy policy
        if(policy.checked){
            errorPolicy.style.visibility="hidden";
        }else{
            console.log("hello");
            errorPolicy.innerText="accecpt privacy policy";
            errorPolicy.style.visibility="visible";
            return false;
        }
        if(true){
            console.log("true");
            clearInterval(loop);
            location.href=`singPhase3.html?${name}`;
            return false;
        }
    }
});