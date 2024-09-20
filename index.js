function increaseScore(team, points){
    let scoreBoard = document.getElementById(team+"Score");
    let newScore = parseInt(scoreBoard.textContent) + parseInt(points)
    scoreBoard.textContent = newScore
}

function startNewGame(){
    document.getElementById("homeScore").textContent = 0
    document.getElementById("guestScore").textContent = 0
}