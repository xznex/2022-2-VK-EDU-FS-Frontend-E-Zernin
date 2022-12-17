import React from "react";
import {Link} from 'react-router-dom';
import styles from './ChatListHeader.module.css';
import header from './CommonHeader.module.css';
import EjectIcon from '@mui/icons-material/Eject';
import CircleIcon from '@mui/icons-material/Circle';
import StopIcon from '@mui/icons-material/Stop';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DoneIcon from '@mui/icons-material/Done';

export function ProfileHeader() {
    return (
        <React.Fragment>
            <div className={header.hat}>
                <EjectIcon id={header.trinagle} />
                <CircleIcon id={header.circle} />
                <StopIcon id={header.stop} />
            </div>
            <div className={header.header}>
                <Link to='/' className={header.first_element}>
                    <ArrowBackIcon sx={{ fontSize: 35 }} className={`${header.header__icons}`} id={header.arrow_back} />
                </Link>

                <div className={styles.header_title}>
                    <h2>Edit Profile</h2>
                </div>

                <div className={header.other}>
                    {/*<SearchIcon sx={{ fontSize: 35 }} className={`${header.header__icons} ${styles.button}`} />*/}
                    <DoneIcon sx={{ fontSize: 35 }} className={header.header__icons} />
                </div>
            </div>
        </React.Fragment>
    );
}