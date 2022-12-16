import React from "react";
import styles from "../../pages/PageChat/Dialog.module.css";
import DoneAllIcon from '@mui/icons-material/DoneAll';

export function Message({message}) {
	const date = new Date(message.sent_at);
	const currentHours = ("0" + date.getHours()).slice(-2);
	const currentMinutes = ("0" + date.getMinutes()).slice(-2);
	const date_out = `${currentHours}:${currentMinutes}`

	return (
		<div className={styles.message} style={{animation: 'appear .4s'}}>
			<span className={styles.text}>{message.text}</span>
			<div className={styles.info}>
				<span className={styles.date}>{date_out}</span>
				<DoneAllIcon className={styles.done_all}/>
			</div>
		</div>
	);
}
