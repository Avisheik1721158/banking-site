document.getElementById('login-submit').addEventListener('click', function () {
    // get user email
    const userEmail = document.getElementById('user-email')
    const emailAdd = userEmail.value;


    // get user password
    const passwordField = document.getElementById('user-password')
    const userPassword = passwordField.value;;


    if (emailAdd == 'sontan@gmail.com' && userPassword == 'secret') {
        window.location.href = 'banking.html'
    }
    else {
        console.log('invalid')
    }
})