import {React, useEffect, useState} from "react";

import {DialogHeader} from '../../components/Header/DialogHeader';
import {PageChatContent} from '../../components/Content/PageChatContent';
import {MessageForm} from "../../components/Button/MessageForm";

export default function PageChat() {
	// const localMessages = (localStorage.getItem("messages")) ? JSON.parse(localStorage.getItem("messages")) : [];
	const [messageValue, setMessageValue] = useState('');
	const [messages, setMessages] = useState([]);
	const API_URL_GET = 'https://tt-front.vercel.app/messages';
	const API_URL_POST = 'https://tt-front.vercel.app/message';

	const sendRequest = (method, url, body = null) => {
		const headers = {
			'Content-Type': 'application/json',
		}

		return fetch(url, body ? {
			method: method,
			body: JSON.stringify(body),
			headers: headers,
		} : {method: method}).then(response => {
			if (response.status >= 400) {
				return response.json().then(result => {
					console.log("\n\n\nerror\n\n\n");
					const error = new Error('Something went wrong!');
					error.data = result;
					throw error;
				})
			}
			return response.json();
		});
	}

	const pollItems = () => {
		// sendRequest('GET', API_URL_GET)
		// 	.then(data => {
		// 		console.log(data);
		// 		console.log(localStorage.getItem("messages"))
		// 	});
		// let messages_mes = []
		sendRequest('GET', API_URL_GET)
			// .then(data => data.forEach((mes) => {
			// 	mes.chat = 0;
			// 	mes.sender = mes.author;
			// 	mes.is_delivered = false;
			// 	mes.sent_at = new Date(mes.timestamp).toString();
			// 	messages_mes.push(mes);
			// }))
			.then(data => {
				// console.log(messages_mes);
				// console.log(data)
				setMessages(data);
		});
	}

	useEffect(() => {


		const poll_interval = setInterval(pollItems, 2000);
		return () => clearInterval(poll_interval)
	});

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
			is_delivered: false,
			sent_at: sent_at.toString(),
			text: messageValue,
		};

		const message_output_for_tt_front_server = {
			author: "Testov Testik",
			text: message_output.text
		}

		console.log(message_output_for_tt_front_server)

		saveMessage(message_output);
		setMessages(prevState => [...prevState, message_output]);

		console.log(JSON.stringify(message_output))

		sendRequest('POST', API_URL_POST, message_output_for_tt_front_server)
			.then(resp => console.log(resp))
			.catch(err => console.log(err, err.data))

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
