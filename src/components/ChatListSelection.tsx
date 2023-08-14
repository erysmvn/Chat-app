import { ChatPreview } from "../models/ChatPreview";
import "./ChatListSelection.css"
import ChatListTable from "./ChatListTable";
import ListHeader from "./ListHeader";

function ChatListSelection() {

    const chatPreviews: ChatPreview[] = [
        {
            userFullName: "Giovanni",
            lastMessage: "lot"
        },
        {
            userFullName: "Jessico Calcetto",
            lastMessage: "Stase che famo?"
        },
        {
            userFullName: "Juan mecanico",
            lastMessage: "està toda mojada"
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