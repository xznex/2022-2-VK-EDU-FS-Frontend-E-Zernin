import React from 'react';

import './App.css';
import {ChatList} from "./pages/PageChatList/ChatList";
import {PageChat} from "./pages/PageChat/PageChat";

class App extends React.Component {
    showChatList = () => {
        if (window.location.pathname === '/') {
            return <ChatList />
        }
    }
    showPageChat = () => {
        if (window.location.pathname === '/chat') {
            return <PageChat />
        }
    }


    render() {
        return (
            <div className="App">
                {this.showChatList()}
                {this.showPageChat()}
            </div>
        );
    }
}

export default App;
