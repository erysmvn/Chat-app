import { useEffect, useState } from "react";
import "./ChatDetail.css"
import { ChatMessage } from "../models/ChatMessage";

function ChatDetailSelection() {
    const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
    const [inputContent, setInputContent] = useState("");

    let onSendMessage = (message: string) => {
        setChatMessages([
            ...chatMessages,
            {
                who: "me",
                content: message,
                sentAt: new Date().toString(),
            },
        ]);
    };

    const handleKeyDown = (event: any) => {
        if (event.key === "Enter") {
            onSendMessage(inputContent);
        }
    };

    useEffect(() => {
        setChatMessages([
            {
                who: "me", 
                content: "Ciao", 
                sentAt: "123"
            },
            {
                who: "me", 
                content: "Come stai?", 
                sentAt: "123"
            },
            {
                who: "sender", 
                content: "Bene grazie!", 
                sentAt: "123"
            },
        ]);
    }, []);

    return (
        <div className="chat-detail-container">
            <h1>Chat details</h1>
            <div className="chat-bubbles-container">
                {chatMessages.map((msg) => {
                    return(
                        <div className={"chat-bubble chat-bubble-" + msg.who}>
                            <div className={"chat-bubble-pic chat-bubble-pic-" + msg.who}>
                                G
                            </div>
                            <div>
                                <span>
                                    <p className="chat-bubble-name">{msg.who}</p>
                                    <p className="chat-bubble-content">{msg.content}</p>
                                </span>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="text-input-box">
                <input 
                    value={inputContent}
                    onKeyDown={handleKeyDown}
                    placeholder={"Invia un messaggio"}
                    onChange={(evt) => setInputContent(evt.target.value)}>
                </input>
                    <button onClick={() => onSendMessage(inputContent)} className="send-mssg-btn">
                        Invia
                    </button>
            </div>
        </div>
    );
}

export default ChatDetailSelection;