const tg = window.Telegram.WebApp;
tg.ready();

document.getElementById('make-money').addEventListener('click', () => {
    tg.MainButton.setText("Mining...");
    tg.MainButton.show();
    // Логика майнинга монет
});

document.getElementById('character').addEventListener('click', () => {
    const scoreElement = document.getElementById('score-value');
    let score = parseInt(scoreElement.innerText);
    score += 1;
    scoreElement.innerText = score;
});

document.getElementById('play').addEventListener('click', () => {
    // Логика игры
});

document.getElementById('settings').addEventListener('click', () => {
    // Настройки игры
});

document.getElementById('garage').addEventListener('click', () => {
    // Логика гаража
});

document.getElementById('gym').addEventListener('click', () => {
    // Логика тренажерного зала
});

document.getElementById('work').addEventListener('click', () => {
    // Логика работы
});
