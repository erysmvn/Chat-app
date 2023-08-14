import { ChatPreview } from "../models/ChatPreview";
import "./ChatPreviewCell.css"

interface Props {
    chatPreview: ChatPreview
}

function ChatPreviewCell(props: Props) {
    return(
        <div className="chat-preview-cell-container">
            <h4>{props.chatPreview.userFullName}</h4>
            <p>{props.chatPreview.lastMessage}</p>
        </div>
    );
}

export default ChatPreviewCell;