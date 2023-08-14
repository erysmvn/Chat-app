import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ChatDetailSelection from "./components/ChatDetailSelection";
import ChatListSelection from "./components/ChatListSelection";

function App() {
  return (
    <div className="app-container">
      <ChatListSelection />
      <ChatDetailSelection />
    </div>
  );
}

export default App;
