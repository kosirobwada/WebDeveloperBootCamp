const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
}

const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
}

const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const p1Display = document.querySelector('#p1Display')
const p2Display = document.querySelector('#p2Display')
const resetButton = document.querySelector('#reset')
const winningScoreSelect = document.querySelector('#winningScore')
let p1Score = 0
let p2Score = 0
let winningScore = 3
let isGameOver = false

p1Button.addEventListener('click', function () {
    updateScores(p1, p2)
})

p2Button.addEventListener('click', function () {
    updateScores(p2, p1)
})

function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score++;
        player.display.textContent = player.score
        if (player.score === winningScore) {
            isGameOver = true
            player.display.classList.add('has-text-success')
            opponent.display.classList.add('has-text-danger')
            player.button.disabled = true
            opponent.button.disabled = true
        }
    }
}

resetButton.addEventListener('click', reset)

winningScoreSelect.addEventListener('change', function () {
    // console.log('change')
    winningScore = parseInt(this.value)
    reset()
})

function reset() {
    isGameOver = false
    for (let p of [p1, p2]) {
        p.score = 0
        p.display.textContent = 0
        p.display.classList.remove('has-text-success', 'has-text-danger')
        p.button.disabled = false
    }
}