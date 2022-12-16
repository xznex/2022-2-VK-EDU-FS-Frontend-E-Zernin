import styles from "../../pages/PageChat/Dialog.module.css";
import LinkIcon from "@mui/icons-material/Link";
import {Button} from "./Button";

export function MessageForm({messageValue, onChangeMessageValue, onFormSubmit}) {
	return (
		<div className={styles.chat}>
			<form className={styles.form} action="/" onSubmit={onFormSubmit}>
				<div className={styles.message_with_clip}>
					<input className={styles.form_input} name="message-text" placeholder="Сообщение" type="text"
					       onChange={onChangeMessageValue} value={messageValue}/>

					{messageValue.length > 0 ? <Button/> : <LinkIcon id={styles.link}/>}
				</div>
			</form>
		</div>
	);
}
