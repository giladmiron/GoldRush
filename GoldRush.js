class GoldRush extends Matrix {
    constructor(numRows, numColumns) {
        super(numRows, numColumns),
            this.numColumns = numColumns
        this.numRows = numRows
        this.player1 = { score: 0 }
        this.player2 = { score: 0 }
    }
    movePlayer(player, direction) {
        let oldPosition = this.findCoordinate(player)
        let newPosition = { x: oldPosition.x, y: oldPosition.y }
        if (direction == 'down') {
            if (oldPosition.y == this.numRows - 1) { return }
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
            if (oldPosition.x == this.numColumns - 1) { return }
            newPosition.x++
        }
        let playerName = 'player' + player

        //checks if the player deserves score
        if (this.get(newPosition.y, newPosition.x) == 'C') {
            this[playerName].score++
        }

        //checks if the player won the game
        if (this[playerName].score >= this.coins / 2) {
            alert(`${playerName} won the game!`)
            location.reload()
        }

        //prevents of players to run over each other
        if (this.get(newPosition.y, newPosition.x) == '2' || this.get(newPosition.y, newPosition.x) == '1' || (this.get(newPosition.y, newPosition.x) == 'O')) {
            return
        }

        //changes the values in the old and new locations
        this.alter(oldPosition.y, oldPosition.x, '.')
        this.alter(newPosition.y, newPosition.x, player)

    }
}

