var firstname=null;
var lastname=null;
var age=null;
var email=null;
var password=null;
document.addEventListener("DOMContentloaded",()=>{
    firstname=document.forms['form']['firstname'];
    lastname=document.forms['form']['lastname'];
    age=document.forms['forms']['age'];
    email=document.forms[form]['email'];
    password=document.form['form']['password'];
    var firstname_error=document.getElementById("first_error");
    var lastname_error=document.getElementById("last_error");
    var age_error=document.getElementById("age_error");
    var email_error=document.getElementById("email_error");
    var password_error=document.getElementById("password_error;")

    firstname.addEventListener('textinput',first_verify);
    lastname.addEventListener('textinput',last_verify);
    age.addEventListener('textinput',age_verify);
    email.addEventListener('textinput',email_verify);
    password.addEventListener('password_verify');

});
function validated(){
    if(firstname.value.length<3){
        firstname.style.border="1px solid red";
        firstname_error.style.display="block";
        firstname.focus();
        return false;

    }
    if(lastname.vlaue.length<3){
lastname.style.border="1 px solid red";
lastname_error.style.display="block";
lastname.focus();
return false;
    }
    if((age.value < 18)||(age.value > 40)){
    age.style.border="1px solid red";
    age_error.style.display="block";
    age.focus();
    return false();
    }
    if(email.value.length<8){
        email.style.border="1px solid red";
        email_error.style.display="block";
        email.focus();
        return false();
    }
    if(password.value.length<5){
        password.style.border="1px solid red";
        password_error.style.display="block";
        password.focus();
        return false();
    }
}
function first_verify(){
    if(firstname.value.length>=3){
        firstname_error.style.display="none";
        firstname.style.border="none";
        return true;
    }
}
    function lastname_verify(){
        if(lastname.value.length>=3){
            lastname_error.style.border="none";
            lastname.style.border="none";
            return true;

        }
    }
    function age_verify(){
        if((age.value>=16)||(age.value<=40)){
            age_error.style.display="none";
            return true;
        }
    }
    function email_verify(){
        if(email.value.length>=3){
            email_error.style.border="none";
            return true;
        }
    }
    function password_verify(){
        if(password.value.length>=3){
            password_error.style.display="none";
            password.style.border="none";
            return true;
        }
    }
    




