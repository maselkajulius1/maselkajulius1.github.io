function password() {
    var password = document.getElementById("password").value
    var correctPassword = "password123"
    var calculator = document.getElementById("calculator")
    var passwordForm = document.getElementById("form")

    if(password==correctPassword){
        calculator.style.display = "block"
        passwordForm.style.display = "none"
    }

    else{
        var error = document.getElementById("formIncorrect")
        error.style.display = "block"
    }
}