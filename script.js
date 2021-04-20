var gameStatus = {
    player: 'Player1',
    movesLeft: 9
}

function getId(buttonId) {
    assignText(buttonId)

    if (checkWin()) {
        alert (gameStatus.player + " Has won the game!")
    } else if (checkDraw()) {
        alert ("Draw!")
    } else {
        switchPlayer()
    }
}

function assignText(buttonId) {
    if (gameStatus.player == 'Player1') {
        document.getElementById(buttonId).innerHTML = 'X'
    } else {
        document.getElementById(buttonId).innerHTML = '0'
    }

    --gameStatus.movesLeft
}

function checkWin() {

    // row check
    for (let i = 10; i <= 30; i += 10) {
        if ((document.getElementById(i + 1).innerHTML == document.getElementById(i + 2).innerHTML) &&
            (document.getElementById(i + 2).innerHTML == document.getElementById(i + 3).innerHTML)) {
            return true
        }
    }

    // collumn check
    for (let i = 1; i <= 3; ++i) {
        if ((document.getElementById(i + 10).innerHTML == document.getElementById(i + 20).innerHTML) &&
            (document.getElementById(i + 20).innerHTML == document.getElementById(i + 30).innerHTML)) {
            return true
        }
    }

    // main diagonal
    if ((document.getElementById(11).innerHTML == document.getElementById(22).innerHTML) &&
        (document.getElementById(22).innerHTML == document.getElementById(33).innerHTML)) {
        return true
    }

    // secondary diagonal
    if ((document.getElementById(13).innerHTML == document.getElementById(22).innerHTML) &&
        (document.getElementById(22).innerHTML == document.getElementById(31).innerHTML)) {
        return true
    }

    return false
}

function checkDraw() {
    return (gameStatus.movesLeft == 0)
}

function switchPlayer() {
    if (gameStatus.player == 'Player1') {
        gameStatus.player = 'Player2'
    } else {
        gameStatus.player = 'Player1'
    }
    document.getElementById('playerStatus').innerHTML = "Current player: " + gameStatus.player
}