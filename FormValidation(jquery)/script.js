
$(document).ready(function() {
    $("#usernameValidation").hide();
   $("#emailValidation").hide();
  $("#passwordValidation").hide();
  $("#confirmpassword").hide();
  let usernameError=true;
  let emailError=true;
  let passwordError=true;
  let confirmPasswordError=true;

 //  username validation
  $("#username").keyup(()=>{
              validateUsername();

  });
  function validateUsername(){
       let val=$("#username").val();
       if(val.length===0){
         $("#usernameValidation").show();
         $("#usernameValidation").text("Username can't be empty");
         usernameError=true;
       }else{
         $("#usernameValidation").hide();
         usernameError=false;
       }
  }


 //  email verification
 $("#email").keyup(()=>{
   validateEmail();
 })
 function validateEmail(){
   let email=$("#email").val();
        const emailRegex = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
 if(email.length===0){
   $("#emailValidation").show();
   $("#emailValidation").text("Email can't be empty");
   emailError=true;
 }else if(!emailRegex.test(email)){
   $("#emailValidation").show();
   $("#emailValidation").text("Invalid Email");
   emailError=true;
 }else{
   $("#emailValidation").hide();
   emailError=false;
 }
 }




 // password validation
 $("#password").keyup(()=>{
   validatePassword();
 })
 function validatePassword(){
    let password=$("#password").val();
    const strongRegex = new RegExp(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
      );
    if(password.length===0){
      $("#passwordValidation").show();
      $("#passwordValidation").text("Password can't be Empty");
      passwordError=true;
    }else if(!strongRegex.test(password)){
        $("#passwordValidation").show();
        $("#passwordValidation").text("Invalid Password");
        passwordError=true;
    }else{
        $("#passwordValidation").hide();
        passwordError=false;
    }

 };

 // confirm password validation

 $("#confirmPassword").keyup(()=>{
     validateConfirmPassword();
 });
 function validateConfirmPassword(){
   let confirmPassword=$("#confirmPassword").val();
   let password=$("#password").val();

   // if confirm password is empty
   if(confirmPassword.length===0){
     $("#confirmpassword").show();
     $("#confirmpassword").text("Confirm password can't be empty");
     confirmPasswordError=true;
   }else if(password!==confirmPassword){
     $("#confirmpassword").show();
     $("#confirmpassword").text("Password don't match");
     confirmPasswordError=true;
   }else{
     $("#confirmpassword").hide();
     confirmPasswordError=false;
   }
 }

 // submit button 
 $("#submit-btn").on("click",function(){
     validateUsername();
     validateEmail();
     validatePassword();
     validateConfirmPassword();
     if(usernameError|passwordError||emailError||confirmPasswordError){
       return false;
     }
 });

});
 

