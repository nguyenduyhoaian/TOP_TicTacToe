const Player = (name, token) => {
    const choices = []
    const getName = () => {
        return name
    }
    const getToken = () => {
        return token
    }

    const getChoices = () => {
        return choices
    }
    const setChoices = (choice) => {
        choices.push(choice)
    }
    return { getName, getToken, getChoices, setChoices }
}

const GameBoard = (() => {
    const selectedPosition = []
    const mark = (pos, token) => {
        if (selectedPosition.length < 9) selectedPosition.push([pos, token])
    }

    const getBoard = () => selectedPosition

    return { mark, getBoard }
})()

const GameController = (() => {

    const player1 = Player("Player One", "X")
    const player2 = Player("Player Two", "O")
    console.log("Game start")

    const checkWin = (choices) => {
        const winningPattern = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ]
        return winningPattern.some(pattern => pattern.every(pos => choices.includes(pos)))
    }

    let activePlayer = player1
    while (selectedPosition.length < 9) {
        let validturn = false
        while (!validturn) {
            const input = parseInt(prompt(`${activePlayer.getName()} turn, enter your choice:`))
            validturn = !selectedPosition.includes(input)
            if (validturn) {
                activePlayer.setChoices(input)
                selectedPosition.push(input)
            } else {
                console.log(`cell number ${input} already be checked`)
            }
        }
        if (checkWin(activePlayer.getChoices())) {
            alert("end game")
            return
        }

        //Change player turn
        activePlayer = activePlayer === player1 ? player2 : player1
    }
})

//Display
const boarDisplay = document.querySelector("#boardDisplay")

let buttonId = 0
for (let i = 0; i < 3; i++) {
    const row =  document.createElement("div")
    for (let j = 0; j < 3; j++) {
        const cell = document.createElement("button")
        cell.setAttribute("id",buttonId)
        cell.classList.add("gameButton")
        buttonId++
        row.appendChild(cell)
    }
    boarDisplay.appendChild(row)
}