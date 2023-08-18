import { ChatPreview } from "../models/ChatPreview";
import "./ChatList.css"
import ChatListTable from "./ChatListTable";
import ChatPreviewCell from "./ChatPreview";

function ChatListSelection() {

    const chatPreviews: ChatPreview[] = [
        {
            name1: "Giovanni",
            name2: "",
            userID: "",
            chatID: "",
            lastMessage: "Come va con il lavoro?",
            sentAt: new Date().toString(),
        },
        {
            name1: "Jessico Calcetto",
            name2: "",
            userID: "",
            chatID: "",
            lastMessage: "Pronto per la partita di domani?",
            sentAt: new Date().toString(),
        },
        {
            name1: "Juan meccanico",
            name2: "",
            userID: "",
            chatID: "",
            lastMessage: "Devi assolutamente venire a vedere!",
            sentAt: new Date().toString(),
        },
    ]
    return (
        <div className="chat-list-container">
            <div className="chat-header">
                <h1>Chat</h1>
                <button type="submit" id="new" className="chat-header-new-button">Nuova chat</button>
            </div>
            <div className="preview-cell">
                <ChatListTable chatPreviews={chatPreviews}/>
            </div>
        </div>
    );
}

export default ChatListSelection;