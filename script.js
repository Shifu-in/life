const tg = window.Telegram.WebApp;
tg.initDataUnsafe = {
    "api": "7437233660:AAHzpHSEfjKRlpgS664aSnltSn7fgo9KVUo"
};

let experience = 0;
let money = 0;

document.getElementById('character-image').addEventListener('click', () => {
    experience += 1;
    money += 1;

    updateExperience();
    updateMoney();
    updateBalance();
});

document.getElementById('make-money').addEventListener('click', () => {
    showMiningScreen();
});

document.getElementById('play').addEventListener('click', () => {
    showGameScreen();
});

document.getElementById('settings').addEventListener('click', () => {
    showSettingsScreen();
});

document.getElementById('garage').addEventListener('click', () => {
    showGarageScreen();
});

document.getElementById('gym').addEventListener('click', () => {
    showGymScreen();
});

document.getElementById('work').addEventListener('click', () => {
    showWorkScreen();
});

function updateExperience() {
    const progress = document.getElementById('experience-progress');
    progress.style.width = `${experience}%`;
}

function updateMoney() {
    const progress = document.getElementById('money-progress');
    progress.style.width = `${money}%`;
}

function updateBalance() {
    const balanceValue = document.getElementById('balance-value');
    balanceValue.innerText = money;
}

function showMiningScreen() {
    alert('Mining screen not implemented yet');
}

function showGameScreen() {
    alert('Game screen not implemented yet');
}

function showSettingsScreen() {
    alert('Settings screen not implemented yet');
}

function showGarageScreen() {
    alert('Garage screen not implemented yet');
}

function showGymScreen() {
    alert('Gym screen not implemented yet');
}

function showWorkScreen() {
    alert('Work screen not implemented yet');
}

// Показ экрана загрузки на 2 секунды
window.onload = function() {
    setTimeout(function() {
        document.getElementById('loading-screen').style.display = 'none';
        document.getElementById('game-container').style.display = 'flex';
    }, 2000);
};
