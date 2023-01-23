const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm_password');

const submitBtn = document.querySelector('button');
submitBtn.addEventListener('click', validatePassword());

function validatePassword() {
    passwordValue = password;
    confirmPassValue = confirmPassword;
    console.log(passwordValue);
    if (passwordValue === confirmPassValue) {
        return;
    } else {
        confirmPassword.setCustomValidity('Passwords do not match!');
    }
}