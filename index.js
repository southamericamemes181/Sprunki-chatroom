const form = document.getElementById('form');
const messageArea = document.getElementById('messageArea');
const myNameInput = document.getElementById('myname');
const messageInput = document.getElementById('message');

function loadMessages() {
    const messages = JSON.parse(localStorage.getItem('messages')) || [];
    const messageArea = document.getElementById('messageArea');

    messageArea.innerHTML = '';
    messages.forEach(message => {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');

        const time = new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        messageElement.innerHTML = `<span class="username">${message.name}:</span> ${message.text} <span class="timestamp">(${time})</span>`;
        messageArea.appendChild(messageElement);
    });
    messageArea.scrollTop = messageArea.scrollHeight;
}

function pollMessages() {
    setInterval(loadMessages, 500); // 0.5 seconds
}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = myNameInput.value.trim();
    const message = messageInput.value.trim();

    if (name && message) {
        const messages = JSON.parse(localStorage.getItem('messages')) || [];
        const timestamp = Date.now();

        messages.push({ name: name, text: message, timestamp: timestamp });
        localStorage.setItem('messages', JSON.stringify(messages));

        messageInput.value = '';
        messageInput.focus();
    }
});

loadMessages();
pollMessages();

localStorage.removeItem('messages'); // only used for testing purposes