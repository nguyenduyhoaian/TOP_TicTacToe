const Gameboard = (() => {
    const ROW = 3;
    const COL = 3;
    const gameBoard = []

    for (let i = 0; i < ROW; i++) {
        for (let j = 0; j < COL; j++) {
            gameBoard.push(createCell(i, j))
        }
    }

    getGameBoard = () => {
        console.log("gameBoard value")
        return gameBoard
    }

    return { getGameBoard }
})()

const Cell = () => {
    let value = 0;

    const addToken = function (playerToken) {
        value = playerToken
    }

    const getValue = function () {
        return value
    }

    const getAddress = () => {
        return [r, l]
    }

    return { addToken, getValue }
}

const winningPattern = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
]




function GameController(player1 = "Player One", player2 = "Player Two") {


    return { playRound }
}


