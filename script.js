const tg = window.Telegram.WebApp;
tg.initDataUnsafe = {
    "api": "7398460184:AAHHeFwR04OKU2LwlMGCklOpSO9kxIEsPLM"
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
    alert('Make money feature coming soon!');
});

document.getElementById('play').addEventListener('click', () => {
    alert('Play feature coming soon!');
});

document.getElementById('settings').addEventListener('click', () => {
    alert('Settings feature coming soon!');
});

document.getElementById('garage').addEventListener('click', () => {
    alert('Garage feature coming soon!');
});

document.getElementById('gym').addEventListener('click', () => {
    alert('Gym feature coming soon!');
});

document.getElementById('work').addEventListener('click', () => {
    alert('Work feature coming soon!');
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

// Initialize game on window load
window.onload = function() {
    document.getElementById('game-container').style.display = 'flex';
};
