import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import ChatList from "./pages/PageChatList/ChatList";
import PageChat from "./pages/PageChat/PageChat";
import PageProfile from "./pages/PageProfile/PageProfile";

class App extends React.Component {
	render() {
		return (
			<Router>
				<div className="App">
					<Routes>
						<Route path='/' element={<ChatList />} />
						<Route path='/chat/:chatId' element={<PageChat />} />
						<Route path='/settings' element={<PageProfile />} />
					</Routes>
				</div>
			</Router>
		);
	}
}

export default App;
