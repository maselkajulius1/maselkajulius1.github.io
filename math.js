function multiply() {
    var numberOne = document.getElementById("numberOneInput").value 
    var numberTwo = document.getElementById("numberTwoInput").value

    var product = numberOne * numberTwo
    
    var resultElement = document.getElementById("result")
    resultElement.innerText = 'result: ' + product
}

function divide() {
    var numberOne = document.getElementById("numberOneInput").value
    var numberTwo = document.getElementById("numberTwoInput").value

    var quotient = numberOne / numberTwo

    var resultElement = document.getElementById("result")
    resultElement.innerText = 'result: ' + quotient
}

function add() {
    var numberOne = Number(document.getElementById("numberOneInput").value)
    var numberTwo = Number(document.getElementById("numberTwoInput").value)

    var sum = numberOne + numberTwo

    var resultElement = document.getElementById("result")
    resultElement.innerText = 'result: ' + sum
}

function subtract() {
    var numberOne = document.getElementById("numberOneInput").value
    var numberTwo = document.getElementById("numberTwoInput").value

    var difference = numberOne - numberTwo

    var resultElement = document.getElementById("result")
    resultElement.innerText = 'result: ' + difference
}