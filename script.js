const playerX = "X"
const playerO = "O"
let playerXPlays = []
let playerOPlays = []
let lastPlayer;
let board = document.querySelectorAll("button")
let plays = []

board.forEach((item) => {
    item.innerHTML = "";
    item.addEventListener("click", newMove);
});

function winnerMessage(player) {
    alert(`O ${player} venceu!`)
}

function winnerCondictions(playerPlays, player) {
    if(playerPlays.includes(1) && playerPlays.includes(2) && playerPlays.includes(3)) {
        winnerMessage(player)
    }
    else if(playerPlays.includes(4) && playerPlays.includes(5) && playerPlays.includes(6)) {
        winnerMessage(player)
    }
    else if(playerPlays.includes(7) && playerPlays.includes(8) && playerPlays.includes(9)) {
        winnerMessage(player)
    }
    else if(playerPlays.includes(1) && playerPlays.includes(4) && playerPlays.includes(7)) {
        winnerMessage(player)
    }
    else if(playerPlays.includes(2) && playerPlays.includes(5) && playerPlays.includes(8)) {
        winnerMessage(player)
    }
    else if(playerPlays.includes(3) && playerPlays.includes(6) && playerPlays.includes(9)) {
        winnerMessage(player)
    }
    else if(playerPlays.includes(1) && playerPlays.includes(5) && playerPlays.includes(9)) {
        winnerMessage(player)
    }
    else if(playerPlays.includes(3) && playerPlays.includes(5) && playerPlays.includes(7)) {
        winnerMessage(player)
    } else if(plays.length == 9) {
        alert('Empatou! =(')
    }
}

function newMove(event) {
    if(lastPlayer) {
        if(lastPlayer === "X") {
            event.target.innerHTML = "O"
            lastPlayer = "O"
            playerOPlays.push(parseInt(event.srcElement.className))
            plays.push(parseInt(event.srcElement.className))
            winnerCondictions(playerOPlays, playerO)
        } else if(lastPlayer === "O") {
            event.target.innerHTML = "X"
            lastPlayer = "X"
            playerXPlays.push(parseInt(event.srcElement.className))
            plays.push(parseInt(event.srcElement.className))
            winnerCondictions(playerXPlays, playerX)

        }
    } else {
        event.target.innerHTML = "X"
        lastPlayer = "X"
        playerXPlays.push(parseInt(event.srcElement.className))
        plays.push(parseInt(event.srcElement.className))

    }
    event.target.removeEventListener("click", newMove)
}



