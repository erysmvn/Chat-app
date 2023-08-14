import { ChatPreview } from "../models/ChatPreview";
import "./ChatListSelection.css"
import ChatListTable from "./ChatListTable";
import ListHeader from "./ListHeader";

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
            <ListHeader />
            <ChatListTable chatPreviews={chatPreviews}/>
        </div>
    );
}

export default ChatListSelection;