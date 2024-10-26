const socket = io();

// Listen for messages (you can expand this later)
socket.on('message', (msg) => {
    const messagesDiv = document.getElementById('messages');
    messagesDiv.innerHTML += `<p>${msg}</p>`;
});


// script.js

