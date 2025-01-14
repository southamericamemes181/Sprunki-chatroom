const form = document.getElementById('form');
const messageArea = document.getElementById('messageArea');
const myNameInput = document.getElementById('myname');
const messageInput = document.getElementById('message');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = myNameInput.value.trim();
    const message = messageInput.value.trim();

    if (name && message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.innerHTML = `<span class="username">${name}:</span> ${message}`;

        messageArea.appendChild(messageElement);
        messageArea.scrollTop = messageArea.scrollHeight;

        messageInput.value = '';
        messageInput.focus();
    }

    console.log('sent message');
});