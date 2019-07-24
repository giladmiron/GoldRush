const renderer = new Renderer()
const board = new GoldRush(5, 5)
renderer.renderScores()
renderer.renderBoard(board.matrix)

$(document).keypress(function (e) {
    e = e.which
    console.log(e);

    switch (e) {
        case 97:
            board.movePlayer(1, "left")
            break;
        case 119:
            board.movePlayer(1, "up")
            break
        case 115:
            board.movePlayer(1, "down")
            break;
        case 100:
            board.movePlayer(1, "right")
            break
        case 106:
            board.movePlayer(2, "left")
            break;
        case 105:
            board.movePlayer(2, "up")
            break
        case 107:
            board.movePlayer(2, "down")
            break;
        case 108:
            board.movePlayer(2, "right")
            break
    }
    renderer.renderBoard(board.matrix)
    renderer.renderScores()
})


