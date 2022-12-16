import React from "react";
import styles from "../../pages/PageChat/Dialog.module.css";

import {Message} from '../Message/Message'

export function PageChatContent({messages}) {
	return (
		<div className={styles.screen}>
			<div className={`${styles.message} ${styles.left_side}`}>
				<span className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
				<div className={styles.info}>
					<span className={`${styles.date} ${styles.left_date}`}>14:59</span>
				</div>
			</div>

			<div className="for_message">
				{messages.map((message, key) => (
					<Message key={key} message={message}/>
				))}
			</div>
		</div>
	);
}
