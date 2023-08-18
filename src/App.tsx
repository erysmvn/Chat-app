import React from "react";
import "./App.css";

import { initializeApp } from "firebase/app";
import { FIREBASE_DEV_CONFIG } from "./FirebaseConfig";


import ChatDetailSelection from "./components/ChatDetail";
import ChatListSelection from "./components/ChatList";

function App() {
  const app = initializeApp(FIREBASE_DEV_CONFIG)

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
