import React from 'react';

import './App.css';
import {ChatList} from "./pages/PageChatList/ChatList";
import {PageChat} from "./pages/PageChat/PageChat";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentPage: 'chat-list'
		};
	}

	render() {
		return (
			<div className="App">
				{this.state.currentPage === 'chat-list' && (
					<ChatList changePage={_currentPage => this.setState({currentPage: _currentPage})}/>
				)}

				{this.state.currentPage === 'chat' && (
					<PageChat changePage={_currentPage => this.setState({currentPage: _currentPage})}/>
				)}
			</div>
		);
	}
}

export default App;
