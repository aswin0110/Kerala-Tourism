let email = document.getElementById('email');
let password = document.getElementById('password')

let regExEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
let regExPass = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{8,}$/g


function validateEmail(){
    if (email.value.trim() ==''){
        loginEmail_error.innerHTML = '<p>Email cant blank</p>';
        return false
    }

    else if(!email.value.match(regExEmail)){
        loginEmail_error.innerHTML = '<p>Email is not in proper format<p/>';
        return false

    }
    else{
        loginEmail_error.innerHTML = '<p style= color:green> Validate</p>';
        return true
    }

}
function validatePass(){
    if (password.value.trim() ==''){
        loginPass_error.innerHTML = '<p>Email cant blank</p>';
        return false
    }

    else if(!password.value.match(regExPass)){
        loginPass_error.innerHTML = '<p>Password must 8 charecters,one uppercase one lower case ,must contain  at least one num<p/>';
        return false

    }
    else if(password.value.length<=8){
        loginPass_error.innerHTML = '<p style= "color:green">Poor<p/>';
        return false

    }
    else if(password.value.length>=9 && password.value.length <=11){
        loginPass_error.innerHTML = '<p style= "color:orange">Medium<p/>';
        return true

    }
    else{
        loginPass_error.innerHTML = '<p>Strong</p>';
        return true
    }

}


function validateForm(){
    if(!validateEmail() || !validatePass()){
        return false
    }
    else{
        return true
    }
}


// SIGN UP VALIDATIONS

let fname = document.getElementById('fname');
let lname = document.getElementById('lname');
let mnumber = document.getElementById('mnumber');
let emailerror = document.getElementById('emailerror');
let passwords = document.getElementById('passwords');

let regExEmails = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g

function validatename(){
    if (fname.value.trim()==''){
        
        fname_error.innerHTML = '<h6 style="color: red;">Name cant blank</h6>';
        
    }
    else{
        fname_error.innerHTML = '<h6 style="color: green;">Validated!</h6>';
        
    }
}

function validatelast(){
    if (lname.value.trim()==''){
        
        lname_error.innerHTML = '<h6 style="color: red;">Name cant blank</h6>';
        
        
    }
    else{
        lname_error.innerHTML = '<h6 style="color: green;">Validated!</h6>';
        
    }
}

function validateEmails(){
    if (emailerror.value.trim() ==''){
        error_email.innerHTML = '<h6 style="color: red;">Email cant blank</h6>';
        return false
    }

    else if(!emailerror.value.match(regExEmails)){
        error_email.innerHTML = '<h6 style="color: red;">Email is not in proper format<p/>';
        return false

    }
    else{
        error_emailr.innerHTML = '<h6 style="color: green;"> Validated!</h6>';
        return true
    }

}


function validatePassword(){
    if (passwords.value.trim() ==''){
        error_pass.innerHTML ='<h6 style="color: red;">Email cant blank</h6>';
        
    }

    else if(!passwords.value.match(regExPass)){
        error_pass.innerHTML = '<h6 style="color: red;">Password must 8 charecters,one uppercase one lower case ,must contain  at least one num<p/>';
        

    }
    else if(passwords.value.length<=8){
        error_pass.innerHTML = '<h6 style= "color:green">Poor<p/>';
        

    }
    else if(passwords.value.length>=9 && passwords.value.length <=11){
        error_pass.innerHTML = '<h6 style= "color:orange">Medium<p/>';
        

    }
    else{
        error_pass.innerHTML = '<h6 style="color: red;">Strong</h6>';
        
    }

}