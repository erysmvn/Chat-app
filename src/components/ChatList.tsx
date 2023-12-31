import { useState } from "react";
import { ChatPreview } from "../models/ChatPreview";
import { User } from "../models/Users";
import { createOrUpdateChat } from "../services/ChatPreviewService";
import "./ChatList.css";
import NewChat from "./NewChat";

interface Props {
  chatPreviews: ChatPreview[];
  onChatSelected: (preview: ChatPreview) => void;
  user: User;
}

function ChatList(props: Props) {
  const onCreateChat = (user: User) => {
    const chatId = props.user.userId + "-" + user.userId;
    const chatPreview1: ChatPreview = {
      name1: user.name,
      name2: props.user.name,
      chatID: chatId,
      userID: user.userId,
      lastMessage: "Conversazione iniziata",
      sentAt: "",
    };
    const chatPreview2: ChatPreview = {
      name1: user.name,
      name2: props.user.name,
      chatID: chatId,
      userID: props.user.userId,
      lastMessage: "Conversazione iniziata",
      sentAt: "",
    };
    createOrUpdateChat(props.user.userId, chatId, chatPreview1);
    createOrUpdateChat(user.userId, chatId, chatPreview2);
    props.onChatSelected(chatPreview1);
  };

  const [newChatOpen, setNewChatOpen] = useState(false);

  return (
    <div className="chat-list-container">
      <NewChat
        onUserSelected={(user) => onCreateChat(user)}
        open={newChatOpen}
        onClose={() => setNewChatOpen(false)}
        />
      <div className="chat-header">
        <h1>Chat</h1>
        <div
          onClick={() => setNewChatOpen(true)}
          className="chat-header-new-button"
          >
          <p>New chat</p>
        </div>
      </div>
      <div className="chat-cells-container">
        {props.user &&
          props.chatPreviews.map((e) => {
            const receiverName = props.user.name == e.name1 ? e.name2 : e.name1;
            return (
              <div
                key={e.chatID}
                className="preview-cell"
                onClick={() => {
                  props.onChatSelected(e);
                }}
              >
                <div>
                  <p className="preview-cell-title">{receiverName}</p>
                  <p className="preview-cell-subtitle">{e.lastMessage}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default ChatList;
