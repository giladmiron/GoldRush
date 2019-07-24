class Matrix {
    constructor(numRows, numColumns) {
        this.generateMatrix(numRows, numColumns)
    }

    generateMatrix(numRows, numColumns) {
        this.matrix = []

        for (let r = 0; r < numRows; r++) {
            this.matrix.push([])
            for (let c = 0; c < numColumns; c++) {
                let ranNum = Math.random()
                if (ranNum * 100 < 70) {
                    this.matrix[r].push('.')
                } else {
                    this.matrix[r].push('C')
                }
            }
        }

        this.alter(0, 0, 1)
        this.alter(numRows - 1, numColumns - 1, 2)

        this.coins = 0
        for (let i of this.matrix) {
            for (let o of i) {
                if (o == "C") {
                    this.coins++
                }
            }
        }
        console.log(`there are ${this.coins} coins`)
        return this.matrix
    }


    print() {
        let str = ""
        for (let i of this.matrix) {
            for (let n of i) {
                str = str + n + "\t"
            }
            console.log(str)
            str = ""
        }

    }

    get(rowNum, colNum) {
        return (this.matrix[rowNum][colNum])
    }

    alter(row, col, val) {
        this.matrix[row][col] = val
    }

    printRow(rowNum) {
        for (let i = 0; i < this.matrix[rowNum].length; i++) {
            console.log(this.matrix[rowNum][i])
        }
    }
    printColumn(colNum) {
        for (let i = 0; i < this.matrix.length; i++) {
            console.log(this.matrix[i][colNum])
        }
    }

    findCoordinate(value) {
        for (let i = 0; i < this.matrix.length; i++) {
            for (let j = 0; j < this.matrix[i].length; j++) {
                if (this.matrix[i][j] === value) {
                    return { x: j, y: i }
                }
            }
        }
    }
}

