import React from 'react';
import './App.css';
import {
    ChatList,
    Dialog,
} from './pages'

class App extends React.Component {
    // constructor(props) {
    //   super(props);
    // }
    render() {
        return (
            <div className="App">
                {/* <Dialog /> */}
                <ChatList />
            </div>
        );
    }
}

export default App;
