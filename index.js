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
        messageElement.innerHTML = `<span class="username">${message.name}:</span> ${message.text}`;
        messageArea.appendChild(messageElement);
    });
    messageArea.scrollTop = messageArea.scrollHeight;
}

function pollMessages() {
    setInterval(loadMessages, 2000);
}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = myNameInput.value.trim();
    const message = messageInput.value.trim();

    if (name && message) {
        const messages = JSON.parse(localStorage.getItem('messages')) || [];
        messages.push({ name: name, text: message });

        localStorage.setItem('messages', JSON.stringify(messages));

        messageInput.value = '';
        messageInput.focus();
    }

    console.log('sent message');
});

loadMessages();
pollMessages();