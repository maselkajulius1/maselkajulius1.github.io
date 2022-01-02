var score = 0
var clickAmount = 1
var multipliers = 0

function clickAddScore(){
    score = score + clickAmount

    document.getElementById("score").innerText = 'neon points: ' + score
}

function buyMultiplier(){
    mulitpliers = multipliers + 1
    clickAmoumt = clickAmount * 2
}