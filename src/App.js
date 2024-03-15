import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Live Chat</h1>
        <p>
          Start chatting with our agents to get assistance.
        </p>
        {/* Add your live chat component here */}
        <div className="LiveChat">
          {/* Your live chat component goes here */}
          <img
            src="https://res.cloudinary.com/donfmtaf4/image/upload/v1710487246/livechat_lsrs8i.jpg"
            alt="Live Chat"
            width="50%"
            height="auto"
          />
        </div>
        <p>
          Powered by 
            Falkon Systems
          
        </p>
      </header>
    </div>
  );
}

export default App;
