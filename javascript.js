const password = document.querySelector('#new-password');
const confirmPassword = document.querySelector('#confirm-password');

function validatePassword(){
    if (password.value != confirmPassword.value){
        confirmPassword.setCustomValidity("Password does not match");
        confirmPassword.classList.add('error');
    } else {
        confirmPassword.setCustomValidity('');
        confirmPassword.classList.remove('error');
    };
};

password.onchange = validatePassword;
confirmPassword.onkeyup = validatePassword;
