import { getDatabase, onValue, ref, set } from "firebase/database";
import { ChatMessage } from "../models/ChatMessage";

export function getMessages(chatID: string, onResult: ((messages: ChatMessage[]) => void)) {
    const db = getDatabase();
    const starCountRef = ref(db, "messages/" + chatID);
    onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
            const keys = Object.keys(data)
            let chatMessage: ChatMessage[] = []
            chatMessage = keys.map((key_: any) => {
                const chatMessage: ChatMessage = {
                    who: data[key_].who,
                    content: data[key_].content,
                    sentAt: data[key_].sentAt,
                };
                return chatMessage
            });
            
            const sortedMsg = chatMessage.sort((a, b) => a.sentAt > b.sentAt ? 1 : -1)
            onResult(sortedMsg)
        } else {
            onResult([])
        }
    });
}

export function sendMessage(msg: ChatMessage, chatID: string) {
    const db = getDatabase();
    set(ref(db, "messages/" + chatID + "/" + msg.sentAt), msg);
}