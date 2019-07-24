class GoldRush extends Matrix {
    constructor(numRows, numColumns) {
        super(numRows, numColumns),
            this.player1 = { score: 0 }
        this.player2 = { score: 0 }
    }
    movePlayer(player, direction) {
        let oldPosition = this.findCoordinate(player)
        let newPosition = { x: oldPosition.x, y: oldPosition.y }
        if (direction == 'down') {
            if (oldPosition.y == 4) { return }
            newPosition.y++
        }
        else if (direction == 'up') {
            if (oldPosition.y == 0) { return }
            newPosition.y--
        }
        else if (direction == 'left') {
            if (oldPosition.x == 0) { return }
            newPosition.x--
        }
        else if (direction == 'right') {
            if (oldPosition.x == 4) { return }
            newPosition.x++
        }
        let playerName = 'player' + player
        if (this.get(newPosition.y, newPosition.x) == 'C') {
            this[playerName].score += 10
        }
        if (this.get(newPosition.y, newPosition.x) == '2' || this.get(newPosition.y, newPosition.x) == '1') {
            return
        }
        this.alter(oldPosition.y, oldPosition.x, '.')
        this.alter(newPosition.y, newPosition.x, player)
    }
}

// const board = new GoldRush(5, 5)
// board.print() //the print method should be defined inside of Matrix
// board.movePlayer(1, "down") //this method should be defined inside of GoldRush
// board.print()
// board.movePlayer(2, "left")
// board.print()
// const board = new GoldRush(5, 5)
// console.log(board.player1.score) //prints 0
// board.print()
// board.movePlayer(1, "down")
// console.log(board.player1.score) //prints 0
// board.print()
// board.movePlayer(1, "down")
// console.log(board.player1.score) //prints 10
// board.print()
// board.movePlayer(1, "down")
// console.log(board.player1.score) //prints 10
// board.print()

