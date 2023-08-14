import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ChatDetailSelection from "./components/ChatDetail";
import ChatListSelection from "./components/ChatList";

function App() {
  return (
    <div className="app-container">
      <div className="chat-header">
        
      </div>
      <ChatListSelection />
      <ChatDetailSelection />
    </div>
  );
}

export default App;
