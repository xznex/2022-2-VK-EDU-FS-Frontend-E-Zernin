import React from "react";
import DoneAllIcon from '@mui/icons-material/DoneAll';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import DoneIcon from '@mui/icons-material/Done';

import {ChatListHeader} from '../../components/Header/ChatListHeader'
import styles from './ChatList.module.css';
import avatarProfile from './Anonymous.png'


// по хорошему здесь стоило бы сделать objects map всех чатиков с проверками всяких done_all'ов, avatar'ов,
// но это только по хорошему)
export function ChatList() {
	return (
		<div className="container">
			<ChatListHeader/>
			<div className={styles.chat_list}>
				<a className={styles.chat_message} href="/chat">
					<div className={styles.message__avatar}>
						<img src={avatarProfile} alt="avatar" className={styles.message__avatar_img}/>
					</div>
					<div className={styles.message__content}>
						<h3 className={styles.message__content_name}>Дженнифер Эшли</h3>
						<p className={styles.message__content_last_message}>Ты куда пропал?</p>
					</div>
					<div className={styles.message__info}>
						<p className={styles.message__info_time}>15:52</p>
						<div className={styles.message__info_done_all}>
							<span className={styles.unread}>99</span>
						</div>
					</div>
				</a>
				<a className={styles.chat_message} href="/chat">
					<div className={styles.message__avatar}>
						<img src={avatarProfile} alt="avatar" className={styles.message__avatar_img}/>
					</div>
					<div className={styles.message__content}>
						<h3 className={styles.message__content_name}>Общесто целых бокалов</h3>
						<p className={styles.message__content_last_message}>Ребят, без меня сегодня :(</p>
					</div>
					<div className={styles.message__info}>
						<p className={styles.message__info_time}>15:52</p>
						<div className={styles.message__info_done_all}>
							<DoneAllIcon className={styles.message__info_done_all_icon}/>
						</div>
					</div>
				</a>
				<a className={styles.chat_message} href="/chat">
					<div className={styles.message__avatar}>
						<img src={avatarProfile} alt="avatar" className={styles.message__avatar_img}/>
					</div>
					<div className={styles.message__content}>
						<h3 className={styles.message__content_name}>Антон Иванов</h3>
						<p className={styles.message__content_last_message}>Тоха, ты где?</p>
					</div>
					<div className={styles.message__info}>
						<p className={styles.message__info_time}>15:52</p>
						<div className={styles.message__info_done_all}>
							<DoneAllIcon className={styles.message__info_done_all_icon}/>
						</div>
					</div>
				</a>
				<a className={styles.chat_message} href="/chat">
					<div className={styles.message__avatar}>
						<img src={avatarProfile} alt="avatar" className={styles.message__avatar_img}/>
					</div>
					<div className={styles.message__content}>
						<h3 className={styles.message__content_name}>Серёга (должен 2000Р)</h3>
						<p className={styles.message__content_last_message}>Серёг, это Петя. Где бабло мое?</p>
					</div>
					<div className={styles.message__info}>
						<p className={styles.message__info_time}>15:52</p>
						<div className={styles.message__info_done_all}>
							<DoneAllIcon className={styles.message__info_done_all_icon}/>
						</div>
					</div>
				</a>
				<a className={styles.chat_message} href="/chat">
					<div className={styles.message__avatar}>
						<img src={avatarProfile} alt="avatar" className={styles.message__avatar_img}/>
					</div>
					<div className={styles.message__content}>
						<h3 className={styles.message__content_name}>Общество разбитых...</h3>
						<p className={styles.message__content_last_message}>Петька, ты с нами сегодня?</p>
					</div>
					<div className={styles.message__info}>
						<p className={styles.message__info_time}>15:52</p>
						<div className={styles.message__info_done_all}>
							<div className={`${styles.unread} ${styles.message_notification}`}>
								<AlternateEmailIcon sx={{fontSize: 15}} className={styles.alternate_email}/>
								<p className={styles.alternate_email_number}>99</p>
							</div>
						</div>
					</div>
				</a>
				<a className={styles.chat_message} href="/chat">
					<div className={styles.message__avatar}>
						<img src={avatarProfile} alt="avatar" className={styles.message__avatar_img}/>
					</div>
					<div className={styles.message__content}>
						<h3 className={styles.message__content_name}>Сэм с Нижнего</h3>
						<div
							className={`${styles.message__content_last_message} ${styles.message__content_last_message_photo_camera}`}>
							<PhotoCameraIcon className={styles.photo_camera}/>
							<p>img_12-12-09</p>
						</div>
					</div>
					<div className={styles.message__info}>
						<p className={styles.message__info_time}>15:52</p>
						<div className={styles.message__info_done_all}>
							<DoneIcon className={styles.message__info_done_all_icon}/>
						</div>
					</div>
				</a>
				<a className={styles.chat_message} href="/chat">
					<div className={styles.message__avatar}>
						<img src={avatarProfile} alt="avatar" className={styles.message__avatar_img}/>
					</div>
					<div className={styles.message__content}>
						<h3 className={styles.message__content_name}>Айрат работа</h3>
						<p className={styles.message__content_last_message}>Айрат, во сколько приедешь?</p>
					</div>
					<div className={styles.message__info}>
						<p className={styles.message__info_time}>15:52</p>
						<div className={styles.message__info_done_all}>
							<DoneAllIcon className={styles.message__info_done_all_icon}/>
						</div>
					</div>
				</a>
				<a className={styles.chat_message} href="/chat">
					<div className={styles.message__avatar}>
						<img src={avatarProfile} alt="avatar" className={styles.message__avatar_img}/>
					</div>
					<div className={styles.message__content}>
						<h3 className={styles.message__content_name}>Кеша армия</h3>
						<p className={styles.message__content_last_message}>Кеш, задолбал тупить</p>
					</div>
					<div className={styles.message__info}>
						<p className={styles.message__info_time}>15:52</p>
						<div className={styles.message__info_done_all}>
							<DoneAllIcon className={styles.message__info_done_all_icon}/>
						</div>
					</div>
				</a>
				<a className={styles.chat_message} href="/chat">
					<div className={styles.message__avatar}>
						<img src={avatarProfile} alt="avatar" className={styles.message__avatar_img}/>
					</div>
					<div className={styles.message__content}>
						<h3 className={styles.message__content_name}>Общество разбитых...</h3>
						<p className={styles.message__content_last_message}>Петька, ты с нами сегодня?</p>
					</div>
					<div className={styles.message__info}>
						<p className={styles.message__info_time}>15:52</p>
						<div className={styles.message__info_done_all}>
							<div className={`${styles.unread} ${styles.message_notification}`}>
								<AlternateEmailIcon sx={{fontSize: 15}} className={styles.alternate_email}/>
								<p className={styles.alternate_email_number}>99</p>
							</div>
						</div>
					</div>
				</a>
			</div>
		</div>
	);
}
