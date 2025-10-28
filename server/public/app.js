const socket = io("ws://localhost:3000");

function sendMessage(e) {
  e.preventDefault();
  const messageInput = document.getElementById("message-input");

  if (messageInput.value) {
    socket.emit('message', messageInput.value);
    messageInput.value = "";
  }

  messageInput.focus();
}

document.querySelector("form").addEventListener("submit", sendMessage);

// Listen for messages
socket.on("message", (data) =>  {
    const message = document.createElement("li");
    message.textContent = data;
    document.getElementById("messages").appendChild(message);
})