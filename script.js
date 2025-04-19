const gameArea = document.getElementById('gameArea');
const basket = document.getElementById('basket');
const star = document.getElementById('fallingObject');

let basketPosition = gameArea.offsetWidth / 2 - basket.offsetWidth / 2;
let score = 0;

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft' && basketPosition > 0) {
        basketPosition -= 15;
    } else if (e.key === 'ArrowRight' && basketPosition < gameArea.offsetWidth - basket.offsetWidth) {
        basketPosition += 15;
    }
    basket.style.left = `${basketPosition}px`;
});

function dropStar() {
    let y = 0;
    let x = Math.random() * (gameArea.offsetWidth - star.offsetWidth);
    star.style.left = `${x}px`;

    const interval = setInterval(() => {
        y += 3;
        star.style.top = `${y}px`;

        // Quando a estrela atinge o chão
        if (y >= gameArea.offsetHeight - star.offsetHeight) {
            const basketLeft = basket.offsetLeft;
            const basketRight = basketLeft + basket.offsetWidth;

            const starCenter = x + star.offsetWidth / 2;

            if (starCenter >= basketLeft && starCenter <= basketRight) {
                score++;
                alert("⭐ Pegou! Pontuação: " + score);
            } else {
                alert("💥 Errou! Pontuação final: " + score);
            }

            // Reset
            y = 0;
            star.style.top = "-30px";
            clearInterval(interval);

            // Recomeça
            setTimeout(dropStar, 1000);
        }
    }, 10);
}
dropStar()

