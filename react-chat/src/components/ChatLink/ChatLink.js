import React, {useEffect} from "react";
import avatarProfile from "../../pages/PageChatList/Anonymous.png";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import {Link} from "react-router-dom";
import styles from '../../pages/PageChatList/ChatList.module.css';
import {sendRequest} from '../../utils/sendFetchRequest'

export default function ChatLink({chat}) {
	const [last_message, setMessage] = React.useState([]);
	const date = new Date(last_message.sent_at);
	const date_out = `${date.getHours()}:${date.getMinutes()}`

	useEffect(() => {
		sendRequest('GET', `/api/chats/messages/${chat.id}/`).then(resp => setMessage(resp[0]))
	}, [])

	return (
		<Link className={styles.chat_message} to={`/chat/${chat.id}`}>
			<div className={styles.message__avatar}>
				<img src={avatarProfile} alt="avatar" className={styles.message__avatar_img}/>
			</div>
			<div className={styles.message__content}>
				<h3 className={styles.message__content_name}>{chat.title}</h3>
				<p className={styles.message__content_last_message}>{last_message.text}</p>
			</div>
			<div className={styles.message__info}>
				<p className={styles.message__info_time}>{date_out}</p>
				<div className={styles.message__info_done_all}>
					<DoneAllIcon className={styles.message__info_done_all_icon}/>
				</div>
			</div>
		</Link>
	);
}