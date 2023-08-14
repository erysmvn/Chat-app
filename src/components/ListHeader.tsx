import "./ListHeader.css"

function ListHeader() {
    return(
        <div className="list-header-container">
            <h1>Chat</h1>
            <button className="new-chat-button">Nuova chat</button>
        </div>
    );
}

export default ListHeader;