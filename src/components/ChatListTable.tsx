import { ChatPreview } from "../models/ChatPreview";
import "./ChatListTable.css"
import ChatPreviewCell from "./ChatPreviewCell";

interface Props {
    chatPreviews: ChatPreview[]
}

function ChatListTable(props: Props) {
    return(
        <div className="chat-list-table-container">
            {props.chatPreviews.map(p => {
                return(
                    <ChatPreviewCell chatPreview={p}/>
                )
            })}
        </div>
    );
}

export default ChatListTable;