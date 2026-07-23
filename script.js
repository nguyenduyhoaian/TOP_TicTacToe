function Gameboard() {
    const row = 3;
    const col = 3;
    const board = []
    for (let i = 0; i < row; i++) {
        board[i] = [];
        for (let j = 0; j < col; j++) {
            board[i][j] = Cell()
        }
    }

    const mark = (token, row, col) => {
        if (board[row][col].getValue() === 0) {
            board[row][col].addToken(token)
        }
    }

    const getBoard = () => board

    const printBoard = () => {
        console.log(board.map(row => row.map(cell => cell.getValue())))
    }

    return { getBoard, mark, printBoard }
}

function Cell() {
    let value = 0;

    const addToken = function (playerToken) {
        value = playerToken
    }

    const getValue = function () {
        return value
    }

    return { addToken, getValue }
}


function GameController(player1 = "Player One", player2 = "Player Two") {
    const game = Gameboard()
    const players = [
        {
            name: player1,
            token: 1,
        },
        {
            name: player2,
            token: 2,
        },
    ];

    let activePlayer = players[0];

    const switchPlayerTurn = () => {
        activePlayer = activePlayer === players[0] ? players[1] : players[0];
    };
    const getActivePlayer = () => activePlayer;


    const playRound = (row, col) => {
        console.log(`${activePlayer} mark a cell on row:${row}, col" ${col}`)
        game.mark(activePlayer.token, row, col)

        /* check win/game over here*/
        console.log("Check if player win or game over")



        game.printBoard()
        switchPlayerTurn();


    }

    const checkWin=()=>{

    }




    return {playRound}

}

const game = GameController()
