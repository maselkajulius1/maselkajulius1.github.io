function password() {
    var password = document.getElementById("password").value
    var username = document.getElementById("username").value
    var correctPassword = "password123"
    var calculator = document.getElementById("calculator")
    var passwordForm = document.getElementById("form")
    var title = document.getElementById("user-title")

    if(password==correctPassword && username!=''){
        title.innerText = 'Hello ' + username
        calculator.style.display = "block"
        passwordForm.style.display = "none"
    }

    else if(username==''){
        var error = document.getElementById("formIncorrect")
        error.style.display = "block"
        error.innerText = 'Please enter your username'
    }

    else if(password==''){
        var error = document.getElementById("formIncorrect")
        error.style.display = "block"
        error.innerText = 'Please enter the password'
    }

    else{
        var error = document.getElementById("formIncorrect")
        error.style.display = "block"
        error.innerText = 'Password incorrect'
    }
}