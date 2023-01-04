import {React, useEffect, useState} from "react";
import { useParams } from "react-router-dom";

import {DialogHeader} from '../../components/Header/DialogHeader';
import {PageChatContent} from '../../components/Content/PageChatContent';
import {MessageForm} from "../../components/Button/MessageForm";
import {sendRequest} from '../../utils/sendFetchRequest'

export default function PageChat() {
	// const localMessages = (localStorage.getItem("messages")) ? JSON.parse(localStorage.getItem("messages")) : [];
	const [messageValue, setMessageValue] = useState('');
	const [messages, setMessages] = useState([]);
	const [vkBackend, setVkBackend] = useState(false);
	const params = useParams();
	const chatId = params.chatId;
	const API_URL_GET = 'https://tt-front.vercel.app/messages';
	const API_URL_POST = 'https://tt-front.vercel.app/message';

	const pollItems = () => {
		if (chatId === '1') {
			sendRequest('GET', API_URL_GET).then(data => {
				setVkBackend(true);
				setMessages(data);
			});
		} else {
			sendRequest('GET', `/api/chats/messages/${chatId}/`).then(data => {
				setVkBackend(false);
				setMessages(data);
			})
		}
	}

	useEffect(() => {
		pollItems();
		const poll_interval = setInterval(pollItems, 2000);
		return () => clearInterval(poll_interval)
	}, []);

	// const saveMessage = message => {
	// 	let localMessages = localStorage.getItem("messages");
	//
	// 	if (localMessages === null) {
	// 		localStorage.setItem("messages", JSON.stringify([]));
	// 	}
	//
	// 	localMessages = localStorage.getItem("messages");
	//
	// 	let parsed_messages = JSON.parse(localMessages);
	// 	parsed_messages.push(message);
	//
	// 	localStorage.setItem("messages", JSON.stringify(parsed_messages));
	// }

	const onFormSubmit = event => {
		event.preventDefault();

		if (messageValue === '') return;

		const message_output_for_tt_front_server = {
			author: "Testov Testik",
			text: messageValue
		}

		// console.log(message_output_for_tt_front_server)
		// setMessages(prevState => [...prevState, messageValue]);
		// saveMessage(messageValue);


		// console.log(JSON.stringify(messageValue))

		if (vkBackend) {
			sendRequest('POST', API_URL_POST, message_output_for_tt_front_server)
				.then(resp => console.log(resp))
				.catch(err => console.log(err, err.data))
		} else {
			const message_output = {
				chat: Number(chatId),
				sender: 64,
				is_delivered: false,
				text: messageValue,
			};

			sendRequest('POST', '/api/chats/message/send/', message_output)
				.then((a) => console.log(a))
				.catch(err => console.log(err, err.data))
		}

		setMessageValue('');
	}

	const onChangeMessageValue = (event) => {
		setMessageValue(event.target.value);
	};

	return (
		<div className="container">
			<DialogHeader />
			<PageChatContent messages={messages} vkBackend={vkBackend} />
			<MessageForm
				onFormSubmit={onFormSubmit}
				messageValue={messageValue}
				onChangeMessageValue={onChangeMessageValue}
			/>
		</div>
	);
}
