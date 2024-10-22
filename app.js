function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeBackgroundColor() {
    document.body.style.backgroundColor = getRandomColor();
}

function updateGreeting() {
    const username = document.getElementById('usernameInput').value;
    const greetingMessage = document.getElementById('greetingMessage');

    if (username) {
        greetingMessage.textContent = `Привет, ${username}!`;
    } else {
        greetingMessage.textContent = 'Привет!';
    }
}