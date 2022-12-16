import React from "react";
import header from './CommonHeader.module.css';
import avatar from './Anonymous.png';
import EjectIcon from '@mui/icons-material/Eject';
import CircleIcon from '@mui/icons-material/Circle';
import StopIcon from '@mui/icons-material/Stop';
import SearchIcon from '@mui/icons-material/Search';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export function DialogHeader(props) {
    return (
        <React.Fragment>
            <div className={header.hat}>
                <EjectIcon id={header.trinagle} />
                <CircleIcon id={header.circle} />
                <StopIcon id={header.stop} />
            </div>
            <div className={header.header}>
                <div className={header.first_element} onClick={props.changePage}>
                    <ArrowBackIcon sx={{ fontSize: 35 }} className={`${header.header__icons}`} id={header.arrow_back} />
                </div>

                <div className={header.profile}>
                    <img src={avatar} alt="avatar" id={header.avatar} />
                    <div className={header.intro_profile}>
                        <h2>Дженнифер</h2>
                        <p>была 2 часа назад</p>
                    </div>
                </div>

                <div className={header.other} >
                    <SearchIcon sx={{ fontSize: 35 }} className={`${header.header__icons}`} id={header.search} />
                    <MoreVertIcon sx={{ fontSize: 35 }} className={`${header.header__icons}`} id={header.more_vert} />
                </div>
            </div>
        </React.Fragment>
    );
}
