const socket = io();

function sendMessage() {
    const input = document.getElementById("messageInput");

    const message = input.value.trim();

    if (message === "") return;

    socket.emit("chat message", message);

    input.value = "";
}

socket.on("chat message", (msg) => {
    const messages = document.getElementById("messages");

    const div = document.createElement("div");

    div.classList.add("message");

    div.textContent = msg;

    messages.appendChild(div);

    messages.scrollTop = messages.scrollHeight;
});