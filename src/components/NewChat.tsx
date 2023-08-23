import { useEffect, useState } from "react";
import Popup from "reactjs-popup";
import { User } from "../models/Users"
import "./NewChat.css"
import { getUser, getUsers } from "../services/UserService";

interface Props {
    open: boolean;
    onUserSelected: (user: User) => void
    onClose: () => void
}

function NewChat(props: Props) {
    const [users, setUsers] = useState<User[]>([]);

    const onUserSelected = (user: User) => {
        props.onUserSelected(user)
        props.onClose()
    }

    useEffect(() => {
        // Download users through a promise
        getUsers((users) => setUsers(users.filter(u => u.userID != localStorage.getItem("userID"))))
    }, []);

    return(
        <Popup open={props.open} modal closeOnDocumentClick onClose={() => props.onClose()}>
            <div className="new-chat-container">
                <p>Scegli una persona con cui parlare</p>
                {users.map(user => {
                    return(
                        <div onClick={() => onUserSelected(user)} className="new-chat-contact-container">
                            <p>{user.name}</p>
                        </div>
                    )
                })}
            <div onClick={() => props.onClose()} className="new-chat-contact-container new-chat-close-modal">
                <p>Chiudi</p>
            </div>
            </div>
        </Popup>
    );
}

export default NewChat;