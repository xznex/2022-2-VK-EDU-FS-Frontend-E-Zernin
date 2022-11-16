import './header.css';
import './dialog.css';
import './common.css';
import './chat_list.css';
import image from './images/Anonymous.png';
import image2 from './images/2.jpg';
import image3 from './images/3.jpg';
import image4 from './images/4.png';
import image5 from './images/5.jpg';
import image6 from './images/6.jpg';
import image7 from './images/7.jpg';
import image8 from './images/8.jpg';

const form = document.querySelector('form');
const input = document.querySelector('.form-input');
const screen = document.querySelector('.screen');

getMessages();
screen.scrollTop = screen.scrollHeight;

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
    const send = document.getElementById("send");
    send.remove();
}

function renderMessage(message) {
    let div = document.createElement("div");
    div.className = "message";
    div.style.animation = "appear .4s";
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
