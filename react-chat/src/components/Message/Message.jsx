import React from "react";

/*
let date = new Date(message.date);
let currentHours = ("0" + date.getHours()).slice(-2);
let currentMinutes = ("0" + date.getMinutes()).slice(-2);
span.innerHTML = `${currentHours}:${currentMinutes}`
info.appendChild(span);
*/

export function Message() {
    return (
        <div className="message" style={{animation: 'appear .4s'}}>
            <span className="text">message.text{/* message.text */}</span>
            <div className="info">
                <span className="date">12:04</span>
                <span className="material-icons" id='done_all'>done_all</span>
            </div>
        </div>
    );
}
