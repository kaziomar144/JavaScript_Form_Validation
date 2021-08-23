function name_valid(){
    let name_2 = document.getElementById("username").value;
    let text_1 = document.getElementById("text_1"); 
    let name_pattern = /^([a-z]\d*){5,12}$/i; 
    if(name_2.match(name_pattern))
    {
        text_1.innerHTML = "Username is Valid.";
        text_1.style.color = "#00ff00";
        username.style.border = '3px solid #00ff00';
    }
    else
    {
        text_1.innerHTML = "<b>Username invalid!</b> Username must be <b>5-12</b> characters";
        text_1.style.color = "#ff0000";
        username.style.border = '3px solid #ff0000';
    }
    if(name_2 == "")
    {
        text_1.innerHTML = "";
        text_1.style.color = "#00ff00";
        username.style.border = '';
    }
}

function phone_valid(){
    let phone_2 = document.getElementById("phone").value;
    let text_4 = document.getElementById("text_4"); 
    let phone_pattern = /^(\+88)?-?01[1-9]\d{8}$/; 
    if(phone_2.match(phone_pattern))
    {
        text_4.innerHTML = "Phone Number is Valid.";
        text_4.style.color = "#00ff00";
        phone.style.border = '3px solid #00ff00';
    }
    else
    {
        text_4.innerHTML = "Please Enter Your Valid Phone Number";
        text_4.style.color = "#ff0000";
        phone.style.border = '3px solid #ff0000';
    }
    if(phone_2 == "")
    {
        text_4.innerHTML = "";
        text_4.style.color = "#00ff00";
        phone.style.border = '';
    }
}




function validation(){
    let email_2 = document.getElementById("email").value;
    let text_2 = document.getElementById("text_2"); 
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; 
    if(email_2.match(pattern))
    {
        form.classList.add("valid");
	    form.classList.remove("invalid");
        text_2.innerHTML = "Your Email address in Valid.";
        text_2.style.color = "#00ff00";
        email.style.border = '3px solid #00ff00';

        
    }
    else
    {
        form.classList.remove("valid");
		form.classList.add("invalid");
        text_2.innerHTML = "Please Enter Your Valid Email Address";
        text_2.style.color = "#ff0000";
        email.style.border = '3px solid #ff0000';

        
    }
    if(email_2 == "")
    {
        form.classList.remove("valid");
	    form.classList.remove("invalid");
        text_2.innerHTML = "";
        text_2.style.color = "#00ff00";
        email.style.border = '';

        
    }
 }
 function pass()
 {
    let pwd_2= document.getElementById("pwd").value;
    let text_3 = document.getElementById("text_3");
    let password2 = /^[^]{8,20}$/;

    if(pwd_2.match(password2)){
        form.classList.add("valid2");
		form.classList.remove("invalid2");
        text_3.innerHTML = "Your Password is Valid.";
        text_3.style.color = "#00ff00";
        pwd.style.border = '3px solid #00ff00';
        // pwd.style.color = '#00ff00';
    }
    else
    {
        form.classList.remove("valid2");
		form.classList.add("invalid2");
        text_3.innerHTML = "<b>Password invalid!</b> Password must be <b>8-20</b> characters";
        text_3.style.color = "#ff0000";
        pwd.style.border = '3px solid #ff0000';
        // pwd.style.color = '#ff0000';
    }
    if(pwd_2 == ""){
        form.classList.remove("valid2");
		form.classList.remove("invalid2");
        text_3.innerHTML = "";
        text_3.style.color = "#00ff00";
        pwd.style.border = '';
    }
   
 }



 const pwd = document.querySelector("#pwd") ;                                  
 const cpwd = document.querySelector("#cpwd");
 const text = document.querySelector("#text");
 const btn = document.querySelector("#btn");
 const showBtn = document.querySelector(".show");
 function active(){
     if (pwd.value.length >=8){
         btn.removeAttribute("disabled", "");
         btn.classList.add("active");

     }
     else{
        btn.setAttribute("disabled", "");
        btn.classList.remove("active");
     }
 }
 btn.onclick= function(){
     if(pwd.value != cpwd.value){
        text.style.display="block";
        text.textContent="Error! Confirm Password Not Match";
        text.style.color="red";
        cpwd.style.border="3px solid #ff0000"

        return false;
     }
     else{
        text.style.display="block";
        text.textContent="Nice! Confirm Password Matched";
        text.style.color="#00ff00";
        cpwd.style.border="3px solid #00ff00"

        return true;

     }
  
}
 function active_2(){
     if(cpwd.value!=""){
        showBtn.style.display="block";
        showBtn.onclick= function(){
            if((pwd.type == "password") && (cpwd.type == "password")){
                pwd.type = "text";
                cpwd.type = "text";
                this.textContent = "Hide";
                this.classList.add("active");
            }
            else{
                pwd.type = "password";
                cpwd.type = "password";
                this.textContent = "Show";
                this.classList.remove("active");
            }
            }
        }
     
     else{
        showBtn.style.display="none";
     }
 }