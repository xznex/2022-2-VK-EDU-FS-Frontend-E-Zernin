import React from "react";
import {Link} from 'react-router-dom';
import styles from './ChatListHeader.module.css';
import header from './CommonHeader.module.css';
import EjectIcon from '@mui/icons-material/Eject';
import CircleIcon from '@mui/icons-material/Circle';
import StopIcon from '@mui/icons-material/Stop';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

export function ChatListHeader() {
    return (
        <React.Fragment>
            <div className={header.hat}>
                <EjectIcon id={header.trinagle} />
                <CircleIcon id={header.circle} />
                <StopIcon id={header.stop} />
            </div>
            <div className={header.header}>
                <Link to='/settings'>
                    <button className={`${header.first_element} ${styles.button}`}>
                        <MenuIcon sx={{ fontSize: 35 }} className={`${header.header__icons} ${styles.burger}`} />
                    </button>
                </Link>

                <div className={styles.header_title}>
                    <h2>Messanger</h2>
                </div>

                <div className={header.other}>
                    <SearchIcon sx={{ fontSize: 35 }} className={`${header.header__icons} ${styles.button}`} />
                </div>
            </div>
        </React.Fragment>
    );
}