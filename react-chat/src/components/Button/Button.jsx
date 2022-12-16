import React from "react";
import SendIcon from "@mui/icons-material/Send";
import styles from "../../pages/PageChat/Dialog.module.css";

export function Button(props) {
    return (
        <button id={styles.button_send}>
            <SendIcon id={styles.send}/>
        </button>
    );
}
