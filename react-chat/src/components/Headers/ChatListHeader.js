import React from "react";
// import './DialogHeader.css';
// import avatar from './Anonymous.png'

export function ChatListHeader() {
    return (
        <div className="container">
            <div className="hat">
                <span className="material-icons" id="triangle">eject</span>
                <span className="material-icons" id="circle">circle</span>
                <span className="material-icons" id="stop">stop</span>
            </div>
            <div className="header">
                <a className="first-element" href="chat_list.html">
                    <span className="material-icons header__icons" id="arrow_back">arrow_back</span>
                </a>

                <div className="profile">
                    {/* <img src={avatar} alt="avatar" id="avatar" /> */}
                    <div className="intro-profile">
                        <h2>Дженнифер</h2>
                        <p>была 2 часа назад</p>
                    </div>
                </div>

                <div className="other">
                    <span className="material-icons header__icons" id="search">search</span>
                    <span className="material-icons header__icons" id="more_vert">more_vert</span>
                </div>
            </div>
        </div>
    );
}