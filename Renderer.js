class Renderer {
    constructor() { }


    renderBoard(matrix) {
        $('.container').empty()
        for (let i of matrix) {
            const source = $('#game-template').html()
            const template = Handlebars.compile(source);
            const newHTML = template({ i })
            $('.container').append(newHTML)
        }
    }


    renderScores() {
        $('.scores').empty()
        $('.scores').append(`<div class=score1> player's 1 score is:${board.player1.score} </div>
        <div class="score2">player's 2 score is:${board.player2.score} </div>`)
    }
}