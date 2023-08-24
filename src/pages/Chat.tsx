import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Chat.css";
import { ChatPreview } from "../models/ChatPreview";
import { User } from "../models/Users";
import { getChatPreviews } from "../services/ChatPreviewService";
import { getAuth } from "firebase/auth";
import { getUser } from "../services/UserService";
import ChatDetail from "../components/ChatDetail";
import ChatList from "../components/ChatList";

function Chat() {
  const [selectedChat, setSelectedChat] = useState<ChatPreview>();
  const [user, setUser] = useState<User>();
  const [chatPreviews, setChatPreviews] = useState<ChatPreview[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Verify if there's a session
    const userID = localStorage.getItem("userID");
    if (userID) {
      getChatPreviews((previews) => {
        setChatPreviews(previews);
      });
      getUser(userID).then((user_) => {
        if (user_) {
          setUser(user_);
        } else {
          navigate("../login");
        }
      });
    } else {
      navigate("../login");
    }
  }, []);

  return (
    <div className="chat-container">
      {user && 
        <>
          <ChatList
            chatPreviews={chatPreviews}
            user={user}
            onChatSelected={(preview) => setSelectedChat(preview)}
          />
          <ChatDetail user={user} chat={selectedChat} />
        </>
      }
    </div>
  );
}

export default Chat;
