import {React, useEffect, useState} from "react";

import {DialogHeader} from '../../components/Header/DialogHeader';
import {PageChatContent} from '../../components/Content/PageChatContent';
import {MessageForm} from "../../components/Button/MessageForm";

export default function PageChat() {
	const localMessages = (localStorage.getItem("messages")) ? JSON.parse(localStorage.getItem("messages")) : [];
	const [messageValue, setMessageValue] = useState('');
	const [messages, setMessages] = useState([...localMessages]);
	const API_URL = 'https://tt-front.vercel.app/messages';

	useEffect(() => {
		const poll_items = () => {
			fetch(API_URL)
				.then(resp => resp.json())
				.then(data => data.forEach((mes) => {
					mes.chat = 0;
					mes.sender = mes.author;
					mes.is_delivered = false;
					mes.sent_at = new Date(mes.timestamp).toString();
					setMessages(prevState => [...prevState, mes]);
					console.log(mes)
				}));
		}
		const t = setInterval(() => poll_items(), 30000);
	}, []);

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
			<DialogHeader />
			<PageChatContent messages={messages}/>
			<MessageForm
				onFormSubmit={onFormSubmit}
				messageValue={messageValue}
				onChangeMessageValue={onChangeMessageValue}
			/>
		</div>
	);
}
