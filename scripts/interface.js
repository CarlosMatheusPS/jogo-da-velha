document.addEventListener('DOMContentLoaded', () => {
    let squares = document.querySelectorAll("div.square");
    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })
});
function handleClick(event) {
    count++;
    let square = event.target;
    let position = square.id;

    if (handleMove(position)) {
        playerTime = (playerTime == 0) ? 'Jogador 1 [Espadas]' : 'Jogador 2 [Escudo]'

        setTimeout(() => {
            alert(`Fim de jogo - O vencedor foi: ${playerTime}`);
            playAgain();
        }, 10);
    } else if (count == 9 && gameOver == false) {
        setTimeout(() => {
            alert(`Fim de jogo - Os jogadores Empataram`);
            playAgain();
        }, 10);
    }
    updateSquare(position);
}
function updateSquare(position) {
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class='${symbol}'</div>`
}