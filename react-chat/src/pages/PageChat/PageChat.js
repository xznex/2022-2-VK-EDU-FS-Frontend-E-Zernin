import {React, useState} from "react";

import {DialogHeader} from '../../components/Header/DialogHeader';
import {PageChatContent} from '../../components/Content/PageChatContent';
import {MessageForm} from "../../components/Button/MessageForm";

export function PageChat(props) {
	const localMessages = (localStorage.getItem("messages")) ? JSON.parse(localStorage.getItem("messages")) : [];
	const [messageValue, setMessageValue] = useState('');
	const [messages, setMessages] = useState([...localMessages]);

	const saveMessage = message => {
		let localMessages = localStorage.getItem("messages");

		if (localMessages === null) {
			localStorage.setItem("messages", JSON.stringify([]));
		}

		localMessages = localStorage.getItem("messages");

		let parsed_messages = JSON.parse(localMessages);
		parsed_messages.push(message);

		localStorage.setItem("messages", JSON.stringify(parsed_messages));
	}

	const onFormSubmit = event => {
		event.preventDefault();

		if (messageValue === '') return;

		const sent_at = new Date().toString();
		const message_output = {
			chat: 15,
			sender: 5,
			is_delivered: true,
			sent_at: sent_at.toString(),
			text: messageValue,
		};

		saveMessage(message_output);
		setMessages(prevState => [...prevState, message_output]);

		setMessageValue('');
	}

	const onChangeMessageValue = (event) => {
		setMessageValue(event.target.value);
	};

	return (
		<div className="container">
			<DialogHeader changePage={() => props.changePage('chat-list')} />
			<PageChatContent messages={messages}/>
			<MessageForm
				onFormSubmit={onFormSubmit}
				messageValue={messageValue}
				onChangeMessageValue={onChangeMessageValue}
			/>
		</div>
	);
}
