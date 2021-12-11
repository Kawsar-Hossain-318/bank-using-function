// login from section start here
document.getElementById('login-btn').addEventListener('click', function(){
    // user email
    const userEmailField = document.getElementById('user-email');
    const userEmail = userEmailField.value;

    // user password
    const userPasswordField = document.getElementById('user-password');
    const userPassword = userPasswordField.value;

    // user email and password checking here
    if(userEmail == 'admin@admin.com' && userPassword == 'admin'){
        window.location.href="banking.html";
    }
    else{
        const error = document.getElementById('alert-message');
        error.innerText="Your Email And Password Are Incorrect !";
    }
});
