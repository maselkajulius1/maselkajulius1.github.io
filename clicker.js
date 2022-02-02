var score = 0
var clickAmount = 1
var multipliers = 0
var multiplierCost = 20;

function clickAddScore(){
    score = score + clickAmount

    document.getElementById("score").innerText = 'neon points: ' + score
}

function buyMultiplier(){
    if(score >= multiplierCost){
        score = score - multiplierCost
        multipliers = multipliers + 1
        clickAmount = clickAmount * 2
        multiplierCost = multiplierCost * 3
        document.getElementById("score").innerText = 'neon points: ' + score
        document.getElementById("multiplier-count").innerText = multipliers
        document.getElementById("multiplier-text").innerText = 'Buy 2x Multiplier (' + multiplierCost + ' points)'
    }
}

function saveGame(){
    var gameSave = {
        score: score,
        clickAmount: clickAmount,
        multipliers: multipliers,
        multiplierCost: multiplierCost
    }
    localStorage.setItem("gameSave", JSON.stringify(gameSave))
}

function loadGame(){
    var savedGame = JSON.parse(localStorage.getItem("gameSave"))
    if(typeof savedGame.score !== undefined) score = savedGame.score
    if(typeof savedGame.clickAmount !== undefined) clickAmount = savedGame.clickAmount
    if(typeof savedGame.multipliers !== undefined) multipliers = savedGame.multipliers
    if(typeof savedGame.multiplierCost !== undefined) multiplierCost = savedGame.multiplierCost
    document.getElementById("score").innerText = 'neon points: ' + score
    document.getElementById("multiplier-count").innerText = multipliers
    document.getElementById("multiplier-text").innerText = 'Buy 2x Multiplier (' + multiplierCost + ' points)'
}