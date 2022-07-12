$(document).ready(function(){
    $("#usernameValidation").hide();
    $("#passwordValidation").hide();
    $("#confirmPassword").hide();

    let Error=true;
    let password_error=true;
    let confirm_password_error=true;
    //  we have to validate username and creae a function for that
    $('#username').keyup(function(){
        validateUser();
    })
   
    const validateUser=function(){
        let val=$(".username").val();
        if(val==="") {
            var txt3 = document.createElement("p");  // Create with DOM
            txt3.innerHTML = "UserNameCannot be Empty";
            $('#usernameValidation').append(text3);
            $("#usernameValidation").show();
        }
        else{
            $("#usernameValidation").hide();
        }

    }
    if(Error==true&&password==true&&confirmpassword==true){
        return true;
    }

})