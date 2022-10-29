import './header.css';
import './index.css';
import './chat_list.css';


const form = document.querySelector('form');
const input = document.querySelector('.form-input');
const screen = document.querySelector('.screen');

getMessages();

form.addEventListener('submit', sendMessage.bind(this));

function sendMessage(event) {
    event.preventDefault();

    if (input.value == "") return;

    let date = new Date();

    let message = {
        sender: "me",
        text: input.value,
        date: date.toString()
    };

    renderMessage(message);
    saveMessage(message);

    screen.scrollTop = screen.scrollHeight;
    input.value = "";
}

function renderMessage(message) {
    let div = document.createElement("div");
    div.className = "message";
    screen.append(div);

    let text_message = document.createElement("span");
    text_message.className = "text";
    text_message.innerText = message.text;
    div.append(text_message)

    let info = document.createElement("div");
    info.className = "info";
    div.appendChild(info);

    let span = document.createElement("span");
    span.className = "date";
    let date = new Date(message.date);
    let currentHours = ("0" + date.getHours()).slice(-2);
    let currentMinutes = ("0" + date.getMinutes()).slice(-2);
    span.innerHTML = `${currentHours}:${currentMinutes}`
    info.appendChild(span);

    let status = document.createElement("span");
    status.className = "material-icons";
    status.id = "done_all";
    status.innerHTML = "done_all";
    info.appendChild(status);
    
}

function saveMessage(message) {
    let messages = localStorage.getItem("messages");
    
    if (messages === null) {
        localStorage.setItem("messages", JSON.stringify({"messages": []}));
    }

    messages = localStorage.getItem("messages");
    
    let parsed_messages = JSON.parse(messages).messages;
    parsed_messages.push(message);
    
    localStorage.setItem("messages", JSON.stringify({"messages": parsed_messages}));
}

function getMessages() {
    let messages = localStorage.getItem("messages");
    
    if (!messages) return;

    for (let mes of JSON.parse(messages).messages) {
        renderMessage(mes);
    }
}
