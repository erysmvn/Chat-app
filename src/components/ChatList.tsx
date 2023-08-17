import { ChatPreview } from "../models/ChatPreview";
import "./ChatList.css"
import ChatListTable from "./ChatListTable";
import ChatPreviewCell from "./ChatPreview";

function ChatListSelection() {

    const chatPreviews: ChatPreview[] = [
        {
            userFullName: "Giovanni",
            lastMessage: "Come va con il lavoro?"
        },
        {
            userFullName: "Jessico Calcetto",
            lastMessage: "Pronto per la partita di domani?"
        },
        {
            userFullName: "Juan meccanico",
            lastMessage: "Devi assolutamente venire a vedere!"
        },
    ]
    return (
        <div className="chat-list-container">
            <div className="chat-header">
                <h1>Chat</h1>
                <button className="chat-header-new-button">Nuova chat</button>
            </div>
            <div className="preview-cell">
                <ChatListTable chatPreviews={chatPreviews}/>
            </div>
        </div>
    );
}

export default ChatListSelection;